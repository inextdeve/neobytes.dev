import Head from "next/head";

const defaultParams = {
  description:
    "Launch Your Business Now With Neobytes Dev, And Take It Up To The Next Level",
  keywords:
    "neobytes.dev, neobytes, website developer, create website, ecommerce website, web app, website template",
  title: "Neobytes | The Next Generation Of The Web",
  robots: "index, follow",
  language: "English",
  author: "neobytes.dev",
  canonical: false,
};

const HeadSeo = ({
  description = defaultParams.description,
  keywords = defaultParams.keywords,
  title = defaultParams.title,
  robots = defaultParams.robots,
  language = defaultParams.language,
  author = defaultParams.author,
  canonical = defaultParams.canonical,
  og,
  children,
}) => {
  const openGraph = {
    title,
    description,
    image: "/Website designer.png",
    ...og,
  };

  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={language} />
      <meta name="author" content={author} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:image" content={openGraph.image} />
      {canonical ? (
        <link rel="canonical" href={`https://inext.dev${canonical}`} />
      ) : null}
      {children}
    </Head>
  );
};
export default HeadSeo;
