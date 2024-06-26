import "../styles/globals.css";
import "../styles/ir-black.min.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}

export default MyApp;
