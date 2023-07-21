import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = ({ children }) => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Drevon Kooya" />
        <meta
          name="copyright"
          content="All rights reserved, 2023. Drevon Kooya"
        />
        <meta httpEquiv="content-language" content="en" />
        <link
          rel="icon"
          type="image/svg"
          href="/favicons/logo.svg"
        />
        <meta name="msapplication-TileColor" content="#7000FF" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
