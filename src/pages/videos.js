import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VideoWrapper = styled.iframe`
  margin-bottom: 15px;
  border: 0;
  width: 100%;
  height: 235px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    width: 560px;
    height: 315px;
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
      <h2>Videos</h2>
      <p>
        I run a YouTube channel making videos teaching people how to become
        better developers and how to build their own web apps.
      </p>
      <p>
        This is gonna look a lot more impressive once I get a million
        subscribers, so stay tuned.
      </p>
      <p>
        If that sounds interesting, feel free to{" "}
        <a
          href="https://youtube.com/channel/UC5KDiSAFxrDWhmysBcNqtMA"
          target="_blank"
          rel="noopener noreferrer"
        >
          subscribe to my channel
        </a>
        .
      </p>
      <h3>Recent videos</h3>
      {data.allYoutubeVideo.edges.map(({ node }) => {
        return (
          <VideoWrapper
            src={`https://www.youtube.com/embed/${node.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></VideoWrapper>
        )
      })}
    </Layout>
  )
}

export default VideosPage
