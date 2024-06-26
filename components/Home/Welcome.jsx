import Image from "next/image";
import styles from "../../styles/Home.module.css";
const Welcome = () => {
  return (
    <section id="welcome">
      <div className="container">
        <div className={styles.welcomeContainer}>
          <div data-aos="fade-up">
            <h2 className="section-heading">
              Welcome to <span className="text-gradient">Neobytes</span>
            </h2>
            <p className="inext-text section-desc">
              A modern website with new technologies can present and give an
              image of how much your business is professional, If you&apos;re
              tired of searching for a website developer, Neobytes.Dev can help
              you make a great and solid website, that will set the tone for
              your business.
            </p>
          </div>
          <div
            data-aos="fade-in"
            className={`pos-relative ${styles.welcomeImgContainer}`}
          >
            <Image
              src="/Website designer.png"
              alt="website-designer"
              width="2000"
              height="2000"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
