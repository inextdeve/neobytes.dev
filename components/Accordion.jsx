import styles from "../styles/Accordion.module.css";
import { useRef } from "react";

const Accordion = ({ title, body, activeAccordion }) => {
  const accordionBody = useRef();

  const handleClick = () => {
    activeAccordion((prev) => {
      return {
        previous: prev.new,
        new: accordionBody,
      };
    });
  };

  return (
    <div className={styles.accordion} data-aos="fade-up">
      <div className={styles.accordionHead}>
        <h3 className={styles.accordionTitle} onClick={handleClick}>
          {title}
        </h3>
      </div>
      <div className={styles.accordionContent} ref={accordionBody}>
        <p className={`acc-body inext-text ${styles.accordionBody}`}>{body}</p>
      </div>
    </div>
  );
};

export default Accordion;
