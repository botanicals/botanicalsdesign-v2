import React from "react"
import ReactMarkdown from "react-markdown"

import Section from "../section"

const RichText = ({ data }) => {
  return (
    <Section>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </Section>
  )
}

export default RichText
