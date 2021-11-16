import Head from "next/head";

import "../styles/globals.css";
import "../styles/style.css";
import "../styles/styles-custom.css";
import { Nav } from "../components";

export default App;

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome</title>

        {/* bootstrap css */}
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="app-container bg-light">
        <Nav />
        <div className="container pt-4 pb-4">
          <Component {...pageProps} />
        </div>
      </div>

      {/* credits */}
    </>
  );
}
