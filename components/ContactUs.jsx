import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPinMapFill } from "react-icons/bs";
import styles from "../styles/ContactUs.module.css";
import Input from "../components/Input";
import { cmsServer } from "../config/server";
import { FetchError } from "../util/helpers";

const ContactUs = () => {
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const toast = (await import("react-toastify")).toast;
    const sendingToast = toast.loading("Sending...");

    try {
      const response = await fetch(`/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.status >= 400 && response.status < 600)
        throw new FetchError(
          "We cannot recieve your message, try again or use another contact method "
        );

      toast.update(sendingToast, {
        render: "Sent",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
      setFormData(initialForm);
    } catch (error) {
      toast.update(sendingToast, {
        render: error instanceof FetchError ? error.message : "Try again",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  return (
    <div id="contact-us" className={styles.contactUs} data-aos="fade-up">
      <ul className={styles.contactItems}>
        <li className={`${styles.contactItem} ${styles.location}`}>
          <div className={styles.icon}>
            <BsFillPinMapFill />
          </div>
          <div className={styles.contactInfo}>
            <h4 className={styles.contactType}>Location</h4>
            <address>
              Neobytes
              <br />
              <a href="#" className={styles.anchor}>
                25 Rustaveli Avenue, 5th Floor Tbilisi, 0108
                <br />
                Georgia
              </a>
            </address>
          </div>
        </li>
        <li className={`${styles.contactItem} ${styles.email}`}>
          <div className={styles.icon}>
            <HiOutlineMail />
          </div>
          <div className={styles.contactInfo}>
            <h4 className={styles.contactType}>Email</h4>

            <a
              href="mailto:contact@neobytes.dev"
              target="_blank"
              className={styles.anchor}
              rel="noopener noreferrer"
              aria-label="email us"
            >
              contact@neobytes.dev
            </a>
          </div>
        </li>
        <li className={`${styles.contactItem} ${styles.whatsapp}`}>
          <div className={styles.icon}>
            <AiOutlineWhatsApp />
          </div>
          <div className={styles.contactInfo}>
            <h4 className={styles.contactType}>Whatsapp</h4>

            <a
              href="https://api.whatsapp.com/send?phone=995568653441"
              target="_blank"
              className={styles.anchor}
              rel="noopener noreferrer"
              aria-label="message us on whatsapp"
            >
              +995 568653441
            </a>
          </div>
        </li>
      </ul>
      <form className={styles.form} onSubmit={sendMessage}>
        <Input
          type="text"
          name="name"
          required={true}
          placeholder="Name"
          className={styles.inp_name}
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          required={true}
          placeholder="Your Email"
          className={styles.inp_email}
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="subject"
          required={true}
          placeholder="Subject EX: Website, Whatsapp Bot, Support ..."
          className={styles.inp_subject}
          value={formData.subject}
          onChange={handleInputChange}
        />
        <Input
          type="textarea"
          name="message"
          required={true}
          placeholder="Message"
          className={styles.inp_message}
          value={formData.message}
          onChange={handleInputChange}
        />
        <button
          className={`btn btn-primary ${styles.sendButton}`}
          aria-label="send"
        >
          send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
