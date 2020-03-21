import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = styled.article`
  margin-bottom: 2.5em;

  h3 {
    margin-bottom: 0.35em;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Blog</h2>
      {data.allMarkdownRemark.edges.map(({ node }, i) => {
        const { title, subtitle } = node.frontmatter

        return (
          <Article key={i}>
            <Link to={node.fields.slug}>
              <h3>{title}</h3>
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
