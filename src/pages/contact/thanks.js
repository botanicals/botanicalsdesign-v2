import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default () => {
  const seo = {
    title: "Thank you for your submission | Botanicals Design",
    description:
      "Thank you for your submission. We will get back to you shortly.",
    urlPath: "/newsletter/thanks",
  }
  return (
    <PageLayout
      mainHeading="Thank you"
      subHeading=""
      pageHeading=""
      heroImage="home"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="Your form submission was successful">
        <Row>
          <Column width={100}>
            <p>
              We thank you for reaching out! We will get back to you shortly.
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
