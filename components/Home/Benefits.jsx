import Image from "next/image";
import styles from "../../styles/Benefits.module.css";
import SimpleCard from "../SimpleCard";

import { CgSupport } from "react-icons/cg";
import { BsLightningCharge, BsPhone } from "react-icons/bs";
// IMPORT TECHNOLOGIES IMAGES
import git from "../../public/techImages/git.png";
import mongodb from "../../public/techImages/mongodb.png";
import nextjs from "../../public/techImages/nextjs.png";
import nodejs from "../../public/techImages/nodejs.png";
import rapidapi from "../../public/techImages/rapidapi.png";
import reactjs from "../../public/techImages/reactjs.png";
import sanity from "../../public/techImages/sanity.png";
import sass from "../../public/techImages/sass.png";
const Benefits = () => {
  const cardsContent = [
    {
      title: "Fast & Friendly Support",
      text: "We are provide 24 hours support for all clients.You can purchase without hesitation.",
      Icon: () => <CgSupport />,
    },
    {
      title: "Fully Responsive",
      text: "Designed with mobile in mind, iNext is sure to make your website look equally beautiful when viewed on any type of device and resolutions.",
      Icon: () => <BsPhone />,
    },
    {
      title: "Fast Performance",
      text: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements.",
      Icon: () => <BsLightningCharge />,
    },
  ];
  return (
    <section className="benefits">
      <div className="container">
        <div className={styles.benefitsContainer}>
          <h2 className="section-heading" data-aos="fade-up">
            Ditch The old way
            <span className="text-gradient"> Enter the World</span> of a{" "}
            <span className="text-gradient">True Website Developement</span>
          </h2>
          <div className={styles.benefitsCards} data-aos="fade-up">
            {cardsContent.map(({ title, text, Icon }, index) => (
              <SimpleCard
                key={index}
                title={title}
                text={text}
                icon={<Icon />}
                variant={index === 1 ? 3 : null}
              ></SimpleCard>
            ))}
          </div>
          <h4 className={styles.techListHeading} data-aos="fade-down">
            <span className={styles.techListHeadingText}>
              Technologies We Use
            </span>
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              <Image src={nextjs} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={reactjs} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={nodejs} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={mongodb} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={sass} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={sanity} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={git} alt="lang-icon" layout="responsive" />
            </li>
            <li>
              <Image src={rapidapi} alt="lang-icon" layout="responsive" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
