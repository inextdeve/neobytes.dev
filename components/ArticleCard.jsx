import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import styles from "../styles/ArticleCard.module.css";
import { loader } from "../util/helpers";

const ArticleCard = ({ article }) => {
  return (
    <article className={styles.articleCard}>
      <div className={`${styles.articleImage} pos-relative`}>
        <Image
          alt={article.featuredImage.alternativeText}
          src={article.featuredImage.url}
          layout="fill"
          objectFit="cover"
          loader={loader}
        />
      </div>
      <div className={styles.articleContent}>
        <Link href={`/blog/${article.slug}`} passHref legacyBehavior>
          <a aria-label="read more">
            <h1 className={styles.articleTitle}>{article.title}</h1>
          </a>
        </Link>
        <p className={styles.articleResume}>{article.excerpt}</p>
        <div className={styles.info}>
          <div className={styles.articleDate}>
            {moment(article.createdAt).calendar()}
          </div>
          <Link href={`/blog/${article.slug}`} passHref legacyBehavior>
            <a
              className={`${styles.articleLink} text-gradient-hover`}
              aria-label="read more"
            >
              Read More
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
