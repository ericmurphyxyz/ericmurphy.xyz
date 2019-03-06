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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Want to become a better developer? 💻 I'm Eric and I write about web
      development &amp; making web apps to help you level up your skills and
      learn to build cool things online.
    </p>
    <p>
      Subscribe 💌 below and I'll send you an email every Friday about how to
      become a better developer and create some cool projects.
    </p>
    <p>
      I also post a lot on Twitter, follow me at{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ericnmurphy"
      >
        @ericnmurphy
      </a>
      .
    </p>
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
