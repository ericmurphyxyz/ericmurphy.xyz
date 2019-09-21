import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.section`
  height: 100vh;
`

const Hero = styled.header`
  display: grid;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div``

const VideosPage = () => {
  const data = useStaticQuery(graphql`
    query YoutubeVideosQuery {
      allYoutubeVideo {
        edges {
          node {
            videoId
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Videos" />
      <Container>
        <Hero>
          <Column>
            {data.allYoutubeVideo.edges.map(({ node }) => {
              return (
                <iframe
                  width="100%"
                  height="290"
                  src={"https://www.youtube.com/embed/" + node.videoId}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )
            })}
          </Column>
          <Column>
            <h3>Videos</h3>
            <p>
              I run a YouTube channel making videos teaching people how to
              become better developers and how to build their own web apps.
            </p>
            <p>
              If that sounds interesting, you can{" "}
              <a
                href="https://youtube.com/channel/UC5KDiSAFxrDWhmysBcNqtMA"
                target="_blank"
              >
                subscribe to my channel
              </a>
              .
            </p>
          </Column>
        </Hero>
      </Container>
    </Layout>
  )
}

export default VideosPage
