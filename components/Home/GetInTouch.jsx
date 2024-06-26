import styles from "../../styles/getInTouch.module.css";
import ContactUS from "../ContactUs";
const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="container">
        <div className={styles.getInTouchContainer}>
          <h2 className="section-heading" data-aos="fade-up">
            Launch Your<span className="text-gradient"> Website</span> Today
            With <span className="text-gradient">Neobytes</span>
          </h2>
          <ul className={styles.tags} data-aos="fade-up">
            <li className={`btn-primary ${styles.tag}`}>Backend Website</li>
            <li className={`btn-primary ${styles.tag}`}>Frontend Website</li>
            <li className={`btn-primary ${styles.tag}`}>Fullstack website</li>
            <li className={`btn-primary ${styles.tag}`}>Whatsapp Bot</li>
          </ul>
          <ContactUS />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
