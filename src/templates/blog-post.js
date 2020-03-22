import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PostHeader = styled.header`
  h1 {
    margin-bottom: 0.5em;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 0.75em;
  }

  .date {
    font-size: 0.75rem;
    margin-bottom: 4em;
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
      }
    }
  }
`
