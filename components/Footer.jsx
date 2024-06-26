import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import styles from "../styles/Footer.module.css";
import Input from "./Input";
import { cmsServer } from "../config/server";
import { FetchError } from "../util/helpers";
import Image from "next/image";
const Footer = () => {
  const initialForm = { name: "", email: "" };
  const [formData, setFormData] = useState(initialForm);
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const subscribe = async (e) => {
    e.preventDefault();
    const toast = (await import("react-toastify")).toast;
    const subscribingToast = toast.loading("Subscribe");

    try {
      const response = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
        },
        body: JSON.stringify({ ...formData }),
      });

      if (response.status >= 400 && response.status < 600)
        throw new FetchError("Error maybe this email already registred");

      toast.update(subscribingToast, {
        render: "Added successfully",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
      setFormData(initialForm);
    } catch (error) {
      console.log(error);
      toast.update(subscribingToast, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.logoAndSocial}>
            <div className={styles.logo}>
              <Image
                src="/neobytes_full_logo.png"
                width={763 / 5}
                height={650 / 5}
              />
            </div>
            <ul className={styles.social}>
              <li>
                <a
                  href="https://github.com/neobytesdev"
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="visit our github"
                >
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/neobytesdev"
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="visit our instagram"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/neobytesdev"
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="visit our facebook page"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.helperLinks}>
            <h4 className={styles.title}>Neobytes Dev</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/about-us" passHref legacyBehavior>
                  <a aria-label="our story">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" passHref legacyBehavior>
                  <a aria-label="contact us">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" passHref legacyBehavior>
                  <a aria-label="terms of use">Terms of Use</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" passHref legacyBehavior>
                  <a aria-label="privacy policy">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.helperLinks}>
            <h4 className={styles.title}>Ressources</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/youtube-videos" passHref legacyBehavior>
                  <a aria-label="youtube videos">Youtube Video</a>
                </Link>
              </li>
              <li>
                <Link href="/useful-links" passHref legacyBehavior>
                  <a aria-label="useful links">Useful Links</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.newsLetter}>
            <h4 className={styles.footerQuote}>
              Be the first one to get new about Neobytes
            </h4>
            <form className={styles.form} onSubmit={subscribe}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
                value={formData.name}
                required={true}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleInputChange}
                value={formData.email}
                required={true}
              />
              <button className="btn-primary bg-gradient">Subscribe</button>
            </form>
          </div>
        </div>
        <div>
          <p className={`${styles.miniFooter} inext-text`}>
            Copyright © {new Date().getFullYear()} Neobytes Dev | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
