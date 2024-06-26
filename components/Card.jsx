import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";
import { loader } from "../util/helpers";

const Card = ({ project, service, aos }) => {
  const iconSize = 35;

  return (
    <div data-aos={aos} className={`${styles.card} pos-relative`}>
      <div className={`${styles.imageContainer} pos-relative`}>
        <Image
          src={project.featuredImage.url}
          alt="card-image"
          layout="fill"
          objectFit="cover"
          loader={loader}
        />
      </div>
      <div className={`${styles.cardBody} ${styles.transition}`}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.cardLangicons}>
          {project.technologies.map((tech, index) => {
            return (
              <div
                key={project.slug + index}
                className="usedLangIcon pos-relative"
              >
                <Image
                  src={`/techIcons/${tech.name}.svg`}
                  alt="lang-icon"
                  width={iconSize}
                  height={iconSize}
                  layout="intrinsic"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.cardBody} ${styles.transition} ${styles.slideUpCardBody} pos-absolute`}
      >
        <h3 className={styles.cardTitle}>
          {service ? project.title : project.name}
        </h3>
        <div className={styles.cardLangicons}>
          {project.technologies.map((tech, index) => {
            return (
              <div
                key={project.slug + index}
                className="usedLangIcon pos-relative"
              >
                <Image
                  src={`/techIcons/${tech.name}.svg`}
                  alt="lang-icon"
                  width={iconSize}
                  height={iconSize}
                  layout="intrinsic"
                />
              </div>
            );
          })}
        </div>
        <p className={`${styles.cardDesc} inext-text t-left`}>
          {project.excerpt}
        </p>
        <div className={styles.buttons}>
          <Link
            href={`/${service ? "services" : "our-works"}/${project.slug}`}
            passHref
            legacyBehavior
          >
            <a className="btn btn-primary" aria-label="see details">
              See Details
            </a>
          </Link>
          {!service ? (
            <a
              href={project?.liveLink}
              target="_blank"
              className="btn btn-primary"
              rel="nooppener noreferrer"
              aria-label="live preview"
            >
              Live Preview
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
