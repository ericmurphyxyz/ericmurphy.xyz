import styled from "styled-components"

const Row = styled.div`
  display: grid;
  height: 100%;
  max-width: 1140px;
  height: auto;
  min-height: auto;
  margin: 0 auto;
  padding: 20px;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    min-height: 768px;
    height: 100vh;
  }
`
export default Row
