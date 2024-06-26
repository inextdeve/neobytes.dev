import Head from "../../components/Head";
import { useEffect } from "react";
import styles from "../../styles/YoutubeVideos.module.css";
import YoutubeCard from "../../components/YoutubeCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { cmsServer } from "../../config/server";

export async function getStaticProps() {
  const response = await fetch(
    `${cmsServer}/api/youtube-videos?populate=featuredImage`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const ytVideos = await response.json();

  return {
    props: {
      videos: ytVideos.data.map((video) => {
        return {
          ...video.attributes,
          featuredImage: video.attributes.featuredImage.data.attributes,
        };
      }),
    },
  };
}

const YoutubeVideos = ({ videos }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
    });
  }, []);
  return (
    <>
      <Head
        title="iNext | Youtube Videos"
        description="Watch the latest videos with the latest technologies from iNext"
        og={{
          image:
            "https://www.rappler.com/tachyon/2022/01/youtube-open-letter-january-2022.jpg",
        }}
        canonical="/youtube-videos/"
      />

      <section>
        <div className="container">
          <h1 className={`section-heading`} data-aos="fade-up">
            iNext <span className={styles.redText}>Youtube</span> Videos
          </h1>
          <p className={`inext-text ${styles.quote}`} data-aos="fade-up">
            The latest videos with the latest technologies
          </p>
          <main>
            <h2 className={styles.headTitle} data-aos="fade-up">
              Most Popular Videos
            </h2>
            <div className={styles.videos} data-aos="fade-up">
              {videos.map(({ title, slug, featuredImage: { url } }) => (
                <YoutubeCard
                  key={slug}
                  title={title}
                  slug={slug}
                  imgUrl={url}
                />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
export default YoutubeVideos;
