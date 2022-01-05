import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// EXAMPLE OF WHAT PROPS A PAGE PASSES DOWN
// const metadata = {
//   title: "",
//   description: "",
//   imagePath: "",
//   urlPath: "",
// }

function Seo({ metadata }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            imagePath
            siteUrl
          }
        }
      }
    `
  );

  const title = metadata?.title || metadata?.metaTitle || site.siteMetadata.title;
  const description = metadata?.description || metadata?.metaDescription || site.siteMetadata.description;
  const imagePath = metadata?.imagePath || site.siteMetadata.imagePath;

  const { siteUrl } = site.siteMetadata;

  const urlPath = metadata?.urlPath || null;

  return (
    <Helmet>
      {/* HTML attributes */}
      <html lang="en"></html>

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={imagePath} />
      {urlPath ? <link rel="canonical" href={siteUrl + urlPath} /> : null}

      {/* OpenGraph tags */}
      {urlPath ? <meta property="og:url" content={siteUrl + urlPath} /> : null}
      {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />

      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@handle`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} /> */}

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Allura&family=Norican&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default Seo;
