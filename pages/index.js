import Image from "next/image";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Import Swiper Module
import { Autoplay } from "swiper";

import Welcome from "../components/Home/Welcome";
import Projects from "../components/Home/Projects";
import Benefits from "../components/Home/Benefits";
import FAQ from "../components/Home/FAQ";
import GetInTouch from "../components/Home/GetInTouch";
import Head from "../components/Head";
import { useEffect } from "react";
import { cmsServer } from "../config/server";
import { FetchError } from "../util/helpers";

export async function getStaticProps() {
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

  if (response.status >= 400 && response.status < 600)
    throw new FetchError("Fetching Error");

  const data = await response.json();

  const ourWorks = data.data.map((work) => {
    return {
      ...work.attributes,
      technologies: work.attributes.technologies.data.map((tech) => ({
        ...tech.attributes,
      })),
      featuredImage: work.attributes.featuredImage.data.attributes,
    };
  });

  const countProjects = Number(data.meta.pagination.total);

  return {
    props: {
      projects: JSON.parse(JSON.stringify(ourWorks)),
      countProjects,
    },
  };
}

const Home = ({ projects, countProjects }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
    });
  }, []);

  return (
    <>
      <Head canonical="/" />

      <section>
        <div className="container">
          <div className={styles.intro}>
            <div data-aos="fade-right">
              <h1 className={styles.introHeading}>
                Launch your business with
                <br />
                <span className="text-gradient">
                  <span className="">N</span>eobytes Dev
                </span>
                <br />
                and take it up to the next level
              </h1>
              <div className={styles.introSwiper}>
                <Swiper
                  className={styles.swiper}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  <SwiperSlide className="text-gradient">
                    potfolio website
                  </SwiperSlide>
                  <SwiperSlide className="text-gradient">
                    agency website
                  </SwiperSlide>
                  <SwiperSlide className="text-gradient">
                    photography website
                  </SwiperSlide>
                  <SwiperSlide className="text-gradient">
                    Real Estate website
                  </SwiperSlide>
                  <SwiperSlide className="text-gradient">
                    eCommerce website
                  </SwiperSlide>
                  <SwiperSlide className="text-gradient">
                    And More ...
                  </SwiperSlide>
                </Swiper>
              </div>
              <p className={styles.quote}>
                We love what we do and we do what our clients love & work with
                great clients all over the world to create thoughtful and
                purposeful websites.
              </p>
              <div className={styles.exploreButtonContainer}>
                <a
                  href="#projects"
                  className={`bg-gradient btn-primary ${styles.exploreBtn}`}
                  aria-label="our work"
                >
                  <span>Explore Now</span>
                  <span className={styles.exploreBtnIcon}>
                    <HiArrowRight />
                  </span>
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/neobytesdev"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="visit github"
                >
                  <AiOutlineGithub />
                </a>

                <a
                  href="https://www.facebook.com/neobytesdev"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="visit facebook"
                >
                  <AiFillFacebook />
                </a>

                <a
                  href="https://instagram.com/neobytesdev"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="visit instagram"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className={styles.introImage}>
              <Image
                src="/intro-bg.png"
                alt="hero_bg"
                width="2500"
                height="1666.5"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </section>
      <Welcome />
      <Projects projects={projects} countProjects={countProjects} />
      <Benefits />
      <FAQ />
      <GetInTouch />
    </>
  );
};

export default Home;
