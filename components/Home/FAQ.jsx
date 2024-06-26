import { useEffect, useState } from "react";
import Accordion from "../Accordion";
import styles from "../../styles/FAQ.module.css";
const FAQ = () => {
  const [activeAcc, setActiveAcc] = useState({
    previous: null,
    new: null,
  });

  useEffect(() => {
    if (activeAcc.previous) {
      //Remove show class from the previously clicked element
      activeAcc.previous.current.style.height = "0";
    }
    if (activeAcc.new) {
      //Add show class for the clicked element
      let height =
        activeAcc.new.current.querySelector(".acc-body").clientHeight;
      activeAcc.new.current.style.height = height + 25 + "px";
    }
  }, [activeAcc]);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-container">
          <h2 className="section-heading" data-aos="fade-up">
            Frequently Asked Question
          </h2>
          <div className={styles.accordion}>
            <Accordion
              activeAccordion={setActiveAcc}
              title="How did you support time ?"
              body="We are offering a great client support up to 3 months it's depends on the project size."
            />
            <Accordion
              activeAccordion={setActiveAcc}
              title="I have the backend ready, Can you develop the frontend ?"
              body="Yes, I can develop the frontend and integrate it with your backend."
            />
            <Accordion
              activeAccordion={setActiveAcc}
              title="Can you integrate payment gateways, for instance, stripe, paypal etc ?"
              body="Yes, I can integrate almost ALL kinds of payment gateways as of now."
            />

            <Accordion
              activeAccordion={setActiveAcc}
              title="Will you make my website SEO Friendly ?"
              body="Sure, Next. js is inherently an excellent tool to achieve great SEO performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
