import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/container"
import Row from "../components/row"
import SEO from "../components/seo"

const VideoWrapper = styled.iframe`
  margin-bottom: 0;
  border: 0;

  &:first-child {
    margin-bottom: 20px;
  }
`

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
        <Row>
          <div>
            {data.allYoutubeVideo.edges.map(({ node }) => {
              return (
                <VideoWrapper
                  width="100%"
                  height="285"
                  src={"https://www.youtube.com/embed/" + node.videoId}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></VideoWrapper>
              )
            })}
          </div>
          <div>
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
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default VideosPage
