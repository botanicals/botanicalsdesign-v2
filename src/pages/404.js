import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"

export default () => {
  const seo = {
    title: "Page Not Found | Botanicals Design",
    description: "The page you are looking for could not be located.",
  }
  return (
    <PageLayout
      mainHeading="Page not found"
      subHeading=""
      pageHeading="Sorry..."
      heroImage="home"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="We couldn't find the page you are looking for">
        <Row>
          <Column width={100}>
            <p>
              We are sorry, the page you are looking for could not be located.
              This may be due to a broken link, expired bookmark, or mistyped
              URL. Please try again using our menu above. We hope you find what
              you are looking for!
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
