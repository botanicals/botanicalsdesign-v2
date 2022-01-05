import React from "react"
import ReactMarkdown from "react-markdown"

import TextButton from "../elements/text-button"

import Section from "../section"

const Text = ({ data, inColumn }) => {
  return (
    <Section customClassName={inColumn ? "w-full" : ""}>
      {/* HEADING */}
      <div className="mb-4">
        <h2 className="subheading">{data.subheading}</h2>
        <p className="heading uppercase">{data.heading}</p>
      </div>
      {/* END HEADING */}
      <div className="prose prose-blue text-gray-900 max-w-none">
        <ReactMarkdown>{data.text}</ReactMarkdown>
      </div>
      <div className="my-10">
        <TextButton data={data.textButton} />
      </div>
    </Section>
  )
}

export default Text
