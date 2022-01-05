import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../layouts/PageLayout"

import Post from "../components/Post"

const seo = {
  title: "Blog | Botanicals Design",
  description:
    "Explore BOTANICALS blog and sign up for our newsletter for professional tips and tricks, updates and news about us, and other information.",
  imagePath: "/heroes/blog-small-1x.jpg",
  urlPath: "/blog",
}

export default ({ data }) => {
  return (
    <PageLayout
      heroImage="blog"
      ext="jpg"
      mainHeading="Botanicals blog"
      subHeading="Learn about what we have to offer"
      pageHeading=""
      seo={seo}
    >
      <div className="blog-posts-container">
        {data.allMarkdownRemark.nodes.map(node => (
          <Post
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            excerpt={node.frontmatter.excerpt}
            readMore={node.fields.slug}
            date={node.frontmatter.date}
            author={node.frontmatter.author}
            key={Math.floor(Math.random() * 207)}
          />
        ))}
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
          excerpt
          author
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
