import React, { Component } from "react"

import Section from "../section"

// import FeatureBackground from "../elements/feature-background"

class EmailForm extends Component {
  componentDidMount() {
    const { data } = this.props

    const script = document.createElement("script")

    script.src = data.sourceUrl
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    const { data } = this.props
    return (
      <Section>
        {/* <FeatureBackground> */}
        <div className={data.formId}></div>
        {/* </FeatureBackground> */}
      </Section>
    )
  }
}

export default EmailForm
