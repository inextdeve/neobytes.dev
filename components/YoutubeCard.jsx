import Image from "next/image";
import Link from "next/link";
import styles from "../styles/YoutubeCard.module.css";
import { loader } from "../util/helpers";

const YoutubeCard = ({ slug, imgUrl, title }) => {
  return (
    <div className={styles.youtubeCard}>
      <div className={styles.thumbnail}>
        <Link href={`/youtube-videos/${slug}`}>
          <a aria-label={`video ${title}`}>
            <div className={`${styles.imgContainer} pos-relative`}>
              <Image
                className={styles.img}
                src={imgUrl}
                layout="fill"
                objectFit="cover"
                alt="video thumbnail"
                loader={loader}
              />
            </div>
          </a>
        </Link>
      </div>
      <Link href={`/youtube-videos/${slug}`}>
        <a aria-label={`video ${title}`}>
          <h3 className={styles.title}>{title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default YoutubeCard;
