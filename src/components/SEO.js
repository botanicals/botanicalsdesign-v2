import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = props => {
  const {
    title,
    description,
    imagePath,
    ogType,
    ogTitle,
    ogDescription,
    ogImagePath,
    urlPath,
  } = props.config
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultImagePath,
            baseUrl,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          imagePath: imagePath || defaultImagePath,
          ogType: ogType || "website",
          ogTitle: ogTitle || title || defaultTitle,
          ogDescription: ogDescription || description || defaultDescription,
          ogImagePath: ogImagePath || imagePath || defaultImagePath,
          url: urlPath ? baseUrl + urlPath : baseUrl,
        }
        return (
          <Helmet>
            <html lang="en"></html>
            {urlPath === "INDEX" ? (
              <link rel="shortcut icon" href="/favicon.ico" />
            ) : null}
            {urlPath === "INDEX" ? (
              <meta
                name="google-site-verification"
                content="yNz4rVHM0aIlN_Pr0MCUzVK9_7PS3Bk8RcSdV0ezYIo"
              />
            ) : null}
            {urlPath && urlPath === "INDEX" ? (
              <link rel="canonical" href={`${baseUrl}/`} />
            ) : urlPath ? (
              <link rel="canonical" href={`${seo.url}/`} />
            ) : null}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />

            {/* Open Graph Protocol -- for Facebook and Google's Rich Snippets */}
            <meta property="og:type" content={seo.ogType} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.ogTitle} />
            <meta property="og:image" content={seo.ogImagePath} />
            <meta property="og:description" content={seo.ogDescription} />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImagePath: imagePath
        baseUrl: baseUrl
      }
    }
  }
`
