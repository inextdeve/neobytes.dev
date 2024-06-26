import Head from "../../components/Head";
import styles from "../../styles/OurWork.module.css";
import Circle from "../../components/Circle";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cmsServer } from "../../config/server";
import { FetchError } from "../../util/helpers";

export async function getStaticPaths() {
  // Fetch all slugs

  const response = await fetch(`${cmsServer}/api/our-works?fields[0]=slug`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
    },
  });

  const slugs = await response.json();

  const paths = slugs.data.map(({ attributes: { slug } }) => {
    return {
      params: {
        slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `${cmsServer}/api/our-works?populate=featuredImage,technologies`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const ourWorks = (await response.json()).data.map((work) => {
    return {
      ...work.attributes,
      technologies: work.attributes.technologies.data.map((tech) => ({
        ...tech.attributes,
      })),
      featuredImage: work.attributes.featuredImage.data.attributes,
    };
  });
  console.log(ourWorks);
  const ourWork = ourWorks.filter(
    (work) => work.slug === context.params.slug
  )[0];

  return {
    props: {
      project: JSON.parse(JSON.stringify(ourWork)), //Serialize JSON Data
      ourWorks,
    },
  };
}

const Work = ({ project, ourWorks }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
    });
  }, []);

  return (
    <>
      <Head
        title={`iNext | ${project.title}`}
        description={project.excerpt}
        og={{ image: cmsServer + project.featuredImage.url }}
        canonical={`/our-works/${project.slug}/`}
      />
      <section>
        <div className="container pos-relative">
          <Circle />
          <div className={styles.ourWorkContainer}>
            <h1
              data-aos="fade-up"
              className={`section-heading ${styles.title}`}
            >
              {project.title.split(" ").slice(0, 2).join(" ")}
              <span className="text-gradient">
                {" "}
                {project.title.split(" ").slice(2, 3)}{" "}
              </span>
              {project.title
                .split(" ")
                .slice(3, project.title.split(" ").length)
                .join(" ")}
            </h1>
            <p className={`${styles.workDesc} container-lg`}>
              {project.excerpt}
            </p>
            <div className={`d-flex center-x-flex ${styles.previewButton}`}>
              <a
                className="btn-primary orange-bg-gradient"
                href={project.livePreview}
                target="_blank"
                rel="noreferrer"
                aria-label="live preview"
              >
                Live Preview
              </a>
            </div>
            <div className={`${styles.video} container-lg`}>
              <iframe
                className={styles.videoFrame}
                src={project.videoPreview + "?rel=0"}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className={`${styles.longDesc} container-lg`}>
              {project.longDescription}
            </p>
            <h2
              data-aos="fade-up"
              className={`${styles.moreProjectsHeading} text-gradient`}
            >
              Related Projects
            </h2>
            <div className={styles.moreProjects}>
              {ourWorks?.length
                ? ourWorks
                    .filter((p) => p.slug !== project.slug)
                    .map((project, index) => (
                      <Card key={index} project={project} />
                    ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
