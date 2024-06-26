import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Head from "../../components/Head";
import { cmsServer } from "../../config/server";
import styles from "../../styles/Aboutus.module.css";

export async function getStaticProps() {
  const response = await fetch(
    `${cmsServer}/api/gigs?fields[0]=title&fields[1]=slug`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const services = await response.json();

  return {
    props: {
      services: services.data.map((service) => {
        return {
          ...service.attributes,
        };
      }),
    },
  };
}

const AboutUs = ({ services }) => {
  return (
    <>
      <Head
        title="Neobytes | What is Neobytes Dev ?"
        description="Neobytes Dev provides a bunch of services and products related to the next generation of the web"
        canonical="/about-us/"
      />
      <section>
        <div className={`container-lg`}>
          <h1 className={`section-heading`}>Our Story</h1>
          <div>
            <h2 className={`${styles.heading} text-gradient`}>
              What is Neobytes Dev ?
            </h2>
            <p className={`inext-text`}>
              Neobytes Dev provides a bunch of services and products related to
              the next generation of the web
            </p>
          </div>
          <div>
            <h2 className={`${styles.heading} text-gradient`}>
              Story of how Neobytes came to be?
            </h2>
            <p className={`inext-text`}>
              My name is Zakaria, founder & CEO of Neobytes Dev, I{`'`}m in love
              with coding and i like to discover brand new technologies.
            </p>
            <p className={`inext-text`}>
              I started coding 8 years ago, and soon landed a freelancing
              project, I get the idea of offering my experience to the public,
              to help them to get professional and unique websites
            </p>
            <p className={`inext-text`}>
              For that, I built this website for making my experience available
              to everyone in this world
            </p>
          </div>
          <div className={styles.services}>
            <h2 className={styles.servicesTitle}>
              We love what we do and we do what our clients love & work with
              great clients all over the world to create thoughtful and
              purposeful websites.
            </h2>
            <div className={styles.links}>
              {services.map(({ slug, title }) => (
                <Link href={slug} key={slug}>
                  <a
                    className={`${styles.serviceLink} btn-primary`}
                    aria-label={title}
                  >
                    <span>{title}</span>
                    <span className={styles.icon}>
                      <BsArrowRight />
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
