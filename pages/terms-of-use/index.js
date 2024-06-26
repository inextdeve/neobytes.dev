import Head from "../../components/Head";
import styles from "../../styles/Privacypolicy.module.css";
const TermsOfUse = () => {
  return (
    <>
      <Head title="iNext | Terms Of Use" />
      <section>
        <div className="container-lg">
          <h1 className={`section-heading ${styles.title}`}>Terms of use</h1>
          <div>
            <h3 className={styles.smallTitle}>Terms</h3>
            <p className={`inext-text`}>
              By accessing this Website, you are agreeing to be bound by these
              Terms of Use, all applicable laws and regulations, and agree that
              you are responsible for compliance with any applicable local laws.
              If you do not agree with any of these terms, you are prohibited
              from using or accessing this site.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>Services</h3>
            <p className={`inext-text`}>
              By ordering a service, you must contact us with detailed
              requirements of your needs. And working on your order will start
              immediately after receiving a clear payment.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>Payment Methods</h3>
            <p className={`inext-text`}>
              We offer three payment methods PayPal, Fiverr, and Khamsat. You
              can choose the most appropriate for you
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>Refund Policy for Services</h3>
            <p className={`inext-text`}>
              You can request a refund for the service if your order doesn{`'`}t
              complete at the expected time. To request a refund, send us an
              email at contact@inext.dev.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
