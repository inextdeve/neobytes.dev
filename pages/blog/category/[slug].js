import Head from "../../../components/Head";
import ArticleCard from "../../../components/ArticleCard";
import BlogLayout from "../../../components/BlogLayout";
import styles from "../../../styles/Blog.module.css";
import { cmsServer } from "../../../config/server";

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const response = await fetch(
    `${cmsServer}/api/categories?populate[posts][populate][0]=featuredImage&filters[slug][$eq]=${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
    }
  );

  const articles = await response.json();

  return {
    props: {
      articles: articles.data[0].attributes.posts.data.map((article) => ({
        ...article.attributes,
        featuredImage: article.attributes.featuredImage.data.attributes,
      })),
      categoryName: slug,
    },
  };
}

const Blog = ({ articles, categoryName }) => {
  return (
    <>
      <Head
        title={`${categoryName.toUpperCase()} | Blog For Web Designers And Developers`}
        description="Articles all around Nextjs, ReactJs, CSS, JavaScript, front-end, UX and design. For designers and web developers."
        canonical={`/blog/category/${categoryName}/`}
      />

      <div className={styles.articles}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </>
  );
};

Blog.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};
export default Blog;
