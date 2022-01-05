import React from "react"

import Section from "../section"
import FeatureBackground from "../elements/feature-background"
import Form from "../forms/contact-form"

const ContactForm = ({ data }) => {
  return (
    <Section>
      <FeatureBackground>
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-800">
            {data.message}
          </p>
        </div>
        <div className="w-full md:w-3/4 mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Form submitText={data.submitText} />
        </div>
      </FeatureBackground>
    </Section>
  )
}

export default ContactForm
