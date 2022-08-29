import Layout from "./Layout";
import "../styles/globals.css";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
