import styles from "../styles/UsefullLinks.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "../components/Head";
const UsefullLinks = () => {
  return (
    <>
      <Head
        title="Neobytes | Useful Links"
        description="Try this usefull links to know more about modern web developement."
        og={{
          title: "Neobytes | Useful Links",
          description:
            "Try this usefull links to know more about modern web developement.",
          image:
            "https://www.aihr.com/wp-content/uploads/how-to-measure-hr-effectiveness-cover.png",
        }}
        canonical="/useful-links/"
      />

      <section>
        <div className="container">
          <h1 className={`${styles.heading} section-heading`}>
            Neobytes UseFull <span className="text-gradient">Links</span>
          </h1>
          <p className={`${styles.quote} inext-text`}>
            Take up your business to the next level
          </p>
          <ul className={styles.links}>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://www.clock.co.uk/post/next-js-what-is-it-and-why-do-we-use-it#:~:text=Automatic%20code%20splitting-,Next.,page%20the%20user%20is%20viewing."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Know more about NextJS"
              >
                <span>Know more about NextJS</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://pagepro.co/blog/nextjs-seo#in-summary-what-seo-improvements-you-get-by-using-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NextJS and SEO"
              >
                <span>NextJS and SEO</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://www.upsilonit.com/blog/why-you-should-use-react-js-for-web-development#:~:text=One%20of%20the%20main%20advantages,code%20but%20with%20certain%20changes."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Why you should use React.JS for web development ?"
              >
                <span>Why you should use React.JS for web development ?</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://www.mongodb.com/developer/products/mongodb/top-4-reasons-to-use-mongodb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Why MongoDB is a great database in 2022 ?"
              >
                <span>Why MongoDB is a great database in 2022 ?</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://medium.com/free-code-camp/what-exactly-is-node-js-ae36e97449f5#:~:text=js%20website%3A-,Node.,makes%20it%20lightweight%20and%20efficient."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Node JS"
              >
                <span>NodeJS</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <a
                className={styles.link}
                href="https://www.cronj.com/blog/javascript-es7-es8-new-features/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ES9"
              >
                <span>ES9</span>
                <Image
                  src="/left_gradient.svg"
                  width={15.5}
                  height={11.05}
                  layout="fixed"
                  alt="left arrow"
                />
              </a>
            </li>
            <li className={styles.liGradientBorder}>
              <Link href="/contact-us">
                <a className={styles.link} aria-label="contact us">
                  <span>Contact Us</span>
                  <Image
                    src="/left_gradient.svg"
                    width={15.5}
                    height={11.05}
                    layout="fixed"
                    alt="left arrow"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default UsefullLinks;
