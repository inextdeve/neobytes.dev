import Image from "next/image";
import Head from "../../components/Head";
import Circle from "../../components/Circle";
import styles from "../../styles/Services.module.css";
import SimpleCard from "../../components/SimpleCard";
import { useEffect } from "react";
import Card from "../../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "../../components/ContactUs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import parse from "html-react-parser";
import { loader } from "../../util/helpers";
import { cmsServer } from "../../config/server";
import { marked } from "marked";

export async function getStaticPaths() {
  const response = await fetch(`${cmsServer}/api/gigs?fields[0]=slug`, {
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
    `${cmsServer}/api/gigs?populate=technologies,featuredImage&filters[slug][$eq]=${context.params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const gig = await response.json();

  const allGigsResponse = await fetch(
    `${cmsServer}/api/gigs?populate=technologies,featuredImage`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const allGigs = (await allGigsResponse.json()).data.map((service) => {
    return {
      ...service.attributes,
      technologies: service.attributes.technologies.data.map((tech) => ({
        ...tech.attributes,
      })),
      featuredImage: service.attributes.featuredImage.data.attributes,
    };
  });

  return {
    props: {
      service: JSON.parse(
        JSON.stringify({
          ...gig.data[0].attributes,
          featuredImage: gig.data[0].attributes.featuredImage.data.attributes,
          technologies: gig.data[0].attributes.technologies.data.attributes,
        })
      ),
      allGigs,
    },
    revalidate: 10,
  };
}
//Using gigs just for renaming services
const Service = ({ service, allGigs }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
    });
  }, []);

  return (
    <>
      <Head
        title={`iNext | ${service.title}`}
        description={service.summary}
        og={{ image: service.image }}
        canonical={`/services/${service.slug}`}
      />
      <section>
        <div className="container pos-relative">
          <Circle />

          <div className="content">
            <p
              data-aos="fade-up"
              className={`${styles.subtitle} orange_text-gradient`}
            >
              {service.subtitle}
            </p>
            <h1
              data-aos="fade-up"
              className={`section-heading ${styles.heading}`}
            >
              {service.title
                .split(" ")
                .slice(0, service.title.split(" ").length - 1)
                .join(" ")}{" "}
              <span className="text-gradient">
                {service.title.split(" ")[service.title.split(" ").length - 1]}
              </span>
            </h1>
            <p data-aos="fade-up" className={`container-md ${styles.summary}`}>
              {service.excerpt}
            </p>
            <div data-aos="fade-up" className={styles.btnContainer}>
              <a
                href="#contact-us"
                className="btn-primary"
                aria-label="contact us"
              >
                Get In Touch
              </a>

              <a
                href="#features"
                className="btn-primary orange-bg-gradient"
                aria-label="explore features"
              >
                Explore Features
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=995568653441"
                target="_blank"
                rel="noreferrer"
                className="btn-primary order-now-btn"
                aria-label="contact us on whatsapp"
              >
                <span>Order Now</span>
                <span className="order-icon">
                  <AiOutlineWhatsApp />
                </span>
              </a>
            </div>
            <div
              data-aos="fade-down"
              className={`pos-relative container-lg ${styles.imageContainer}`}
            >
              <Image
                src={service.featuredImage.url}
                alt="hero_bg"
                layout="fill"
                objectFit="cover"
                loader={loader}
              />
            </div>
            <div className={styles.descAndFeat}>
              <div data-aos="fade-right" className={styles.desc}>
                <h2
                  className={`${styles.descriptionHeading} section-heading pos-relative`}
                >
                  <span className="text-gradient">Your ticket</span> to the next
                  generation of the <span className="text-gradient">web</span>
                </h2>
                {/* Don't forget class not used */}
                <div className={styles.description}>
                  {parse(marked.parse(service.description))}
                </div>
              </div>
              <div
                id="features"
                data-aos="fade-left"
                className={styles.features}
              >
                {service.offerFeatures.map(({ name, desc }, index) => (
                  <SimpleCard
                    className={`${!index ? styles.stBen : ""}`}
                    title={name}
                    text={desc}
                    icon={false}
                    variant={2}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className={styles.offer}>
              <h2 data-aos="fade-up" className={`section-heading`}>
                See what{`'`}s included in the
                <br />
                <span className="text-gradient">Neobytes Offer</span>
              </h2>
              <article data-aos="fade-up" className={styles.offer}>
                {parse(marked.parse(service.offer))}
              </article>
              <div className={styles.orderNowBigBTN}>
                <a
                  href="https://api.whatsapp.com/send?phone=995568653441"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary order-now-btn"
                  aria-label="order now by contacting us"
                >
                  <span>Order Now</span>
                  <span className="order-icon">
                    <AiOutlineWhatsApp />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.moreServices}>
            <h2
              data-aos="fade-up"
              className={`${styles.moreServicesHeading} text-gradient`}
            >
              Check More Offer
            </h2>
            <div data-aos="fade-down" className={styles.moreServicesContent}>
              {allGigs.length
                ? allGigs.map((service, index) => (
                    <Card project={service} service={true} key={index} />
                  ))
                : null}
            </div>
          </div>
          <ContactUs />
        </div>
      </section>
    </>
  );
};

export default Service;
