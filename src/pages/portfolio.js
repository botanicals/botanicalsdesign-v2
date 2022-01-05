import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Portfolios from "../components/Portfolios"

export default () => {
  const seo = {
    title: "Plantscape Design Portfolio | Botanicals Design",
    description:
      "From interior to exterior and residential to commercial, see how our plantscapes have transformed spaces into places that live, breathe, and engage. View our plantscape design portfolio to see the quality of our work.",
    imagePath: "/heroes/portfolios-small-1x.jpg",
    urlPath: "/portfolio",
  }
  return (
    <PageLayout
      heroImage="portfolios"
      ext="jpg"
      mainHeading="Portfolio"
      subHeading="Explore our portfolios to see the quality of our work"
      pageHeading="The Botanicals portfolio"
      seo={seo}
    >
      <Section sectionHeading="We create beautiful plantscapes">
        <Row>
          <Column width={100}>
            <p>
              From interior to exterior and residential to commercial, see how
              our plantscapes have transformed spaces into places that live,
              breathe, and engage. View our portfolios to see the quality of our
              work.
            </p>
          </Column>
        </Row>
      </Section>
      <Portfolios />
    </PageLayout>
  )
}
