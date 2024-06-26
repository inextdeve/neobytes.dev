import Head from "../../components/Head";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../../styles/YoutubeVideos.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { cmsServer } from "../../config/server";

export async function getStaticPaths() {
  const response = await fetch(
    `${cmsServer}/api/youtube-videos?fields[0]=slug`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

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
    `${cmsServer}/api/youtube-videos?populate=featuredImage&filters[slug][$eq]=${context.params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const ytVideo = await response.json();

  return {
    props: {
      video: JSON.parse(
        JSON.stringify({
          ...ytVideo.data[0].attributes,
          featuredImage:
            ytVideo.data[0].attributes.featuredImage.data.attributes,
        })
      ),
    },
    revalidate: 10,
  };
}

const YoutubePage = ({ video }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
    });
  }, []);
  return (
    <>
      <Head
        title={`iNext | ${video.title}`}
        description={video.description}
        og={{ image: cmsServer + video.featuredImage.url }}
        canonical={`/youtube-videos/${video.slug}`}
      />

      <section>
        <div className="container">
          <h1 className="section-heading py-1" data-aos="fade-up">
            {video.title}
          </h1>
          <div className="video" data-aos="fade-up">
            <iframe
              className={styles.iframe}
              src={video.videoLink}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.description} data-aos="fade-up">
            <h3 className={`${styles.descHead} orange-bg-gradient`}>
              Description
            </h3>
            <p className={styles.descText}>{video.description}</p>
          </div>
          <div className={styles.contactBtn} data-aos="fade-up">
            <Link href="/contact-us">
              <a
                className={`btn-primary orange-bg-gradient ${styles.btn}`}
                aria-label="contact us"
              >
                Get In Touch
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default YoutubePage;
