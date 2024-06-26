// import { getSlugsAndId, getPostById } from "../../util/api"; // VALID
import Head from "../../components/Head";
import BlogLayout from "../../components/BlogLayout";
import Image from "next/image";
import styles from "../../styles/Post.module.css";
import { TbArrowWaveRightDown } from "react-icons/tb";
import Link from "next/link";
import { cmsServer } from "../../config/server";
import { loader } from "../../util/helpers";
import Highlight from "react-highlight";
import { marked } from "marked";

export async function getStaticPaths() {
  const response = await fetch(`${cmsServer}/api/posts?fields[0]=slug`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
    },
  });

  const slugs = await response.json();

  const paths = slugs.data.map(({ attributes: { slug } }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `${cmsServer}/api/posts?filters[slug][$eq]=${context.params.slug}&populate=featuredImage`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const article = await response.json();

  return {
    props: {
      article: {
        ...article.data[0].attributes,
        featuredImage: article.data[0].attributes.featuredImage.data.attributes,
      },
    },
    revalidate: 10,
  };
}

const Post = ({ article }) => {
  return (
    <>
      <Head
        title={article.title}
        description={article.excerpt}
        og={{ image: cmsServer + article.featuredImage.url }}
        canonical={`/blog/${article.slug}/`}
      />

      <article className={styles.article}>
        <div className="container-md">
          <div className={`${styles.imgContainer} pos-relative`}>
            <Image
              src={article.featuredImage.url}
              layout="fill"
              alt="article-thumbnail"
              objectFit="cover"
              loader={loader}
            />
          </div>
          <h1 className={`${styles.title}`}>
            <Link href={`/blog/${article.slug}`} passHref>
              <a>{article.title}</a>
            </Link>
          </h1>
          <p className={styles.summary}>
            <span className={`${styles.summaryTitle} text-gradient`}>
              <span>Quick Summary</span>
              <span className={styles.summaryIcon}>
                <TbArrowWaveRightDown />
              </span>
            </span>
            {article.excerpt}
          </p>
          <div className={styles.line}></div>
          <div className={styles.content}>
            <Highlight innerHTML={true} className="javascript">
              {marked.parse(article.content)}
            </Highlight>
          </div>
        </div>
      </article>
    </>
  );
};

Post.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Post;
