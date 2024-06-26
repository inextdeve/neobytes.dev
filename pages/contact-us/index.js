import Head from "../../components/Head";
import Script from "next/script";
import ContactUs from "../../components/ContactUs";
import { RiMessengerLine } from "react-icons/ri";
import {
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "../../styles/ContactPage.module.css";

const Contactus = () => {
  return (
    <>
      <Head
        title="Neobytes Dev | Contact Us Now Get A Response Now"
        description="Contact us now, We are disponible 24/24 7 days in the week!"
        canonical="/contact-us/"
      />
      <Script
        src="//code.tidio.co/ztnzllivftshwgxdrpvfo2b9famj3ojp.js"
        strategy="afterInteractive"
      />

      <section className="contact-us">
        <div className="container">
          <h1 className={`${styles.heading} section-heading`}>
            Contact Us
            <br />
            <span className={`${styles.websiteName} text-gradient`}>
              Neobytes Dev
            </span>
          </h1>
          <p className={styles.motivation}>
            <span>Build Your Brand</span>
            <span>Get New Business</span>
            <span>Go Up To The Next Level</span>
          </p>
          <div className={styles.btnContainer}>
            <a href="#contact-us" className={`btn-primary`}>
              Get In Touch
            </a>
          </div>

          <p className={`inext-text ${styles.introText}`}>
            We are disponible 24/24 7 days in the week
          </p>
          <div className={styles.contactOptions}>
            <a
              href="https://m.me/neobytesdev"
              target="_blank"
              rel="noreferrer"
              aria-label="contact on messenger"
            >
              <RiMessengerLine />
            </a>
            <a
              href="https://www.instagram.com/neobytesdev/"
              target="_blank"
              rel="noreferrer"
              aria-label="visit our instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a href="tel:+995568653441" aria-label="call us">
              <AiOutlinePhone />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=995568653441"
              target="_blank"
              rel="noreferrer"
              aria-label="message us on whatsapp"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
          <ContactUs />
        </div>
      </section>
    </>
  );
};

export default Contactus;
