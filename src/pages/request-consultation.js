import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Picture from "../components/Picture"
import ConsultationForm from "../components/ConsultationForm"

export default () => {
  const seo = {
    title: "Request a Free Consultation | Botanicals Design",
    description:
      "We will work with you through the entire process of getting your plantscapes planned, designed, and installed, relieving you from the worry of hitting your deadline. Request a free consultation today to get started.",
    imagePath: "/heroes/request-consultation-small-1x.jpg",
    urlPath: "/request-consultation",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Request a consultation"
      subHeading="Request a free design consultation to bring your space to life"
      pageHeading=""
      seo={seo}
    >
      <Section sectionHeading="">
        <Row>
          <Column width={50}>
            <Picture
              column={50}
              page="contact"
              breakpoint="default"
              imageName="request-consultation"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <ConsultationForm />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
