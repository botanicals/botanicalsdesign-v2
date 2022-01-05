import React from "react"

import Section from "../section"

import Text from "./text"
import BusinessDetails from "./business-details"

const TextWithBusinessInfo = ({ data }) => {
  return (
    <Section>
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start max-w-5xl mx-auto px-8">
        <div>
          <Text data={data.leftColumn} inColumn />
        </div>
        <div>
          <BusinessDetails data={data.rightColumn} inColumn />
        </div>
      </div>
    </Section>
  )
}

export default TextWithBusinessInfo
