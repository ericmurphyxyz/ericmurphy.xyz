import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = styled.article`
  margin-bottom: 2.5em;

  h2 {
    margin-bottom: 0.35em;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }, i) => {
        const { title, subtitle } = node.frontmatter

        return (
          <Article key={i}>
            <Link to={node.fields.slug}>
              <h2>{title}</h2>
            </Link>
            <p>{subtitle}</p>
          </Article>
        )
      })}
    </Layout>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
