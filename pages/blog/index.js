import Head from "../../components/Head";
import BlogLayout from "../../components/BlogLayout";
import styles from "../../styles/Blog.module.css";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import { cmsServer } from "../../config/server";

const Blog = ({ articles }) => {
  return (
    <>
      <Head
        title="Neobytes | Blog For Web Designers And Developers"
        description="Articles all around Nextjs, ReactJs, CSS, JavaScript, front-end, UX and design. For designers and web developers."
        canonical="/blog/"
      />

      <div className={styles.articles}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

Blog.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export async function getStaticProps() {
  //New Fetch Method
  const response = await fetch(
    `${cmsServer}/api/posts?populate=featuredImage&pagination[limit]=5`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const posts = await response.json();
  return {
    props: {
      articles: posts.data.map((post) => {
        return {
          ...post.attributes,
          featuredImage: post.attributes.featuredImage.data.attributes,
        };
      }),
    },
    revalidate: 10,
  };
}

export default Blog;
