import React, { useState } from "react"
import styled from "styled-components"

const Form = styled.form`
  & > div {
    display: flex;
    max-width: 450px;
  }

  .mc-field-group {
    flex: 1;
    margin-right: 15px;

    input[type="email"] {
      border: 1px solid rgb(204, 204, 204);
      padding: 0.25em 0.5em;
      margin-bottom: 0.5em;
      border-radius: 4px;
      width: 100%;
    }
  }

  input[type="submit"] {
    flex: 1;
    color: #fff;
    background: #8fa8c1;
    border: 1px solid #8fa8c1;
    border-radius: 4px;
    padding: 0.25em 1.25em;
    margin-bottom: 0.5em;
    transition: opacity 200ms ease-in-out 0s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`

const Subscribe = () => {
  const [email, setEmail] = useState("")

  return (
    <div id="mc_embed_signup">
      <Form
        action="https://ericnmurphy.us18.list-manage.com/subscribe/post?u=5336d953931ddfaf8d6ec81a9&amp;id=00f901b884"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <input
              type="email"
              value={email}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
            <input
              type="text"
              name="b_5336d953931ddfaf8d6ec81a9_00f901b884"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Subscribe
