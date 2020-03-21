import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = styled.article`
  margin-bottom: 2.5em;

  h3 {
    margin-bottom: 0.35em;
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              subtitle
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Blog</h2>
      {data.allMarkdownRemark.edges.map(({ node }, i) => {
        const { title, subtitle, date } = node.frontmatter

        return (
          <Article key={i}>
            <a href="">
              <h3>{title}</h3>
            </a>
            <p>{subtitle}</p>
          </Article>
        )
      })}
    </Layout>
  )
}

export default BlogPage
