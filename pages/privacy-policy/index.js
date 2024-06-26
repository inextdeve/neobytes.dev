import Head from "../../components/Head";
import styles from "../../styles/Privacypolicy.module.css";
const PrivacyPolicy = () => {
  return (
    <>
      <Head title="iNext | Privacy Policy" robots="noindex, nofollow" />
      <section>
        <div className="container-lg">
          <h1 className={`section-heading ${styles.title}`}>Privacy Policy</h1>
          <div>
            <h3 className={styles.smallTitle}>Privacy Policy</h3>
            <p className={`inext-text`}>
              This Privacy Policy governs the manner in which the iNext Website
              collects, uses, maintains and discloses information collected from
              users (each, a “Clients”) of the Website. This Privacy Policy
              applies to the iNext and all Services offered by the iNext.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>Personal information</h3>
            <p className={`inext-text`}>
              We may collect personal information from Clients in a variety of
              ways, including, but not limited to, when Clients make an order or
              subscribe to a newsletter, and in connection with other
              activities, services, features, or resources we make available on
              our Website. Clients may visit the Website anonymously. We will
              collect personal identification information from Clients only if
              they voluntarily submit such information to us.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>
              How we use collected information
            </h3>
            <p className={`inext-text`}>
              The Website may collect and use Clients{`’`} personal information
              for the following purposes: To improve customer service -
              Information you provide helps us respond to your customer service
              requests and support needs more efficiently. To personalize user
              experience - We may use information in the aggregate to understand
              how our Customers as a group use the services and resources
              provided on our Website. To send periodic emails - We may use
              Customer email addresses to send Customers information and updates
              pertaining to their order. Customer email addresses may also be
              used to respond to Customer inquiries, questions, or other
              requests.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>
              Sharing your personal information
            </h3>
            <p className={`inext-text`}>
              We do not sell, trade, or rent Student personal identification
              information to others.
            </p>
          </div>
          <div>
            <h3 className={styles.smallTitle}>Third party websites</h3>
            <p className={`inext-text`}>
              Customer may find advertising or other content on our Website that
              link to the websites and services of our partners, suppliers,
              advertisers, sponsors, licensors, and other third parties. We do
              not control the content or links that appear on these websites and
              are not responsible for the practices employed by websites linked
              to or from our Website. In addition, these websites or services,
              including their content and links, may be constantly changing.
              These websites and services may have their own privacy policies
              and customer service policies. Browsing and interaction on any
              other website, including websites with a link to our Customer, is
              subject to that website{`'`}s terms and policies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
