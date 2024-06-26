import Head from "../../../components/Head";
import Pagination from "../../../components/Pagination";
import BlogLayout from "../../../components/BlogLayout";
import styles from "../../../styles/Blog.module.css";
import ArticleCard from "../../../components/ArticleCard";
import { cmsServer } from "../../../config/server";

export async function getStaticPaths() {
  // Adding nonExistField in request just for return empty object for counting pagination
  const response = await fetch(`${cmsServer}/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
    },
  });

  const articles = await response.json();

  const countPages = Math.ceil(articles.meta.pagination.total / 5); // 5 Posts Per Page

  const paths = [];

  for (let i = 1; i < countPages + 1; i++) {
    paths.push({ params: { page: i.toString() } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const page = context.params.page;

  const response = await fetch(
    `${cmsServer}/api/posts?pagination[start]=${
      (page - 1) * 5
    }&pagination[limit]=5&populate=featuredImage`,
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
      articles: articles.data.map((article) => ({
        ...article.attributes,
        featuredImage: article.attributes.featuredImage.data.attributes,
      })),
      page: context.params.page,
    },
    revalidate: 10,
  };
}

const Blog = ({ articles, page }) => {
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
      <Pagination current={parseInt(page)} />
    </>
  );
};

Blog.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
