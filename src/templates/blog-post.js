import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

const PostHeader = styled.header`
  margin-bottom: 2.5em;

  h1 {
    margin-bottom: 0.5em;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 0.75em;
  }

  .date {
    font-size: 0.75rem;
    margin-bottom: 1.5em;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article>
        <PostHeader>
          <h1>{post.frontmatter.title}</h1>
          <p className="subtitle">{post.frontmatter.subtitle}</p>
          <p className="date">{post.frontmatter.date}</p>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
