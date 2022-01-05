import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TopNotificationBanner from "../components/TopNotificationBanner"
import HeroPageBanner from "../components/HeroPageBanner"
import ContentContainer from "../components/ContentContainer"

import SEO from "../components/SEO"
import Section from "../components/Section"

const PostLayout = ({ data }) => {
  const post = data.markdownRemark

  const seo = {
    title: `${post.frontmatter.title} | Botanicals Design Blog`,
    description: post.frontmatter.excerpt,
    imagePath: "/heroes/blog-small-1x.jpg",
    urlPath: post.fields.slug,
  }

  return (
    <>
      <SEO config={seo} />
      <TopNotificationBanner />
      <Header />
      <HeroPageBanner
        heroImage="blog"
        mainHeading="Botanicals Blog"
        subHeading={`'${post.frontmatter.title}' by ${post.frontmatter.author}`}
        ext="jpg"
      />
      <Section sectionHeading="">
        <p>
          <Link to="/">Botanicals Design</Link> &rsaquo;{" "}
          <Link to="/blog">Blog</Link> &rsaquo; {post.frontmatter.title}
        </p>
      </Section>
      <ContentContainer pageHeading={post.frontmatter.title}>
        <Section sectionHeading="">
          <p className="post__metadata">{`Written by ${post.frontmatter.author} on ${post.frontmatter.date}`}</p>
          <div
            className="post__container"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Section>
      </ContentContainer>
      <Footer />
    </>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        excerpt
      }
      fields {
        slug
      }
    }
  }
`
