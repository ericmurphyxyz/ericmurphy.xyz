import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = styled.article`
  margin-bottom: 1.5em;

  h4 {
    margin-bottom: 0.5em;
  }

  .date {
    font-style: italic;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPost key={node.fields.slug}>
          <h4>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h4>
          <span class="date">{node.frontmatter.date}</span>
        </BlogPost>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogPostList {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`
