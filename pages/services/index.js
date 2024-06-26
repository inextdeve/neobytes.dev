import Head from "../../components/Head";
import styles from "../../styles/Services.module.css";
import Card from "../../components/Card";
import { cmsServer } from "../../config/server";

export async function getStaticProps() {
  const response = await fetch(
    `${cmsServer}/api/gigs?populate=technologies,featuredImage`,
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
          technologies: service.attributes.technologies.data.map((tech) => ({
            ...tech.attributes,
          })),
          featuredImage: service.attributes.featuredImage.data.attributes,
        };
      }),
    },
  };
}

const ServicesPage = ({ services }) => {
  return (
    <>
      <Head
        title="iNext | Services"
        description="Inside The iNext Development Environment, we working with the most in-demand technologies in the JavaScript ecosystem, such as JavaScript, TypeScript, React.js, Next.js, Tailwind, Material UI, Node, MongoDB, Express, and more!"
        canonical="/services/"
      />

      <section className="services">
        <div className="container">
          <div className={styles.servicesContainer}>
            <h1 className={`${styles.title} section-heading`}>
              Get the Most <span className="text-gradient">In-Demand Tech</span>{" "}
              Stack and <span className="text-gradient">Technologies</span>
            </h1>
            <p className={`${styles.introText} inext-text`}>
              Inside The iNext Development Environment, we working with the most
              in-demand technologies in the JavaScript ecosystem, such as
              JavaScript, TypeScript, React.js, Next.js, Tailwind, Material UI,
              Node, MongoDB, Express, and more!
            </p>
            <div className={styles.services}>
              {services.map((item) => {
                return <Card service={true} key={item.slug} project={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
