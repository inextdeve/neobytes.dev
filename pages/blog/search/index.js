import Head from "../../../components/Head";
import BlogLayout from "../../../components/BlogLayout";
import ArticleCard from "../../../components/ArticleCard";
import styles from "../../../styles/Blog.module.css";
import { cmsServer } from "../../../config/server";

export async function getServerSideProps(context) {
  const query = context.query.q;

  if (!query) {
    return {
      props: {
        articles: [],
        query: "",
      },
    };
  }

  const response = await fetch(
    `${cmsServer}/api/posts?filters[title][$contains]=${query}&populate=featuredImage`,
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
      articles: articles.data.map((post) => {
        return {
          ...post.attributes,
          featuredImage: post.attributes.featuredImage.data.attributes,
        };
      }),
      query,
    },
  };
}

const Search = ({ articles, query }) => {
  return (
    <>
      <Head title={`Search - ${query}`} canonical={`/search/`} />

      <div className={styles.articles}>
        <h1>Search</h1>
        {articles.length
          ? articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
          : "No result found"}
      </div>
    </>
  );
};

Search.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Search;
