import React from "react"

import PageLayout from "../../layouts/PageLayout"
import RetailContactForm from "../../components/RetailContactForm"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"

export default () => {
  const seo = {
    title: "Kaysville Retail Contact | Botanicals Design",
    description:
      "Our trained staff are always happy to answer your questions or assist in any way. Visit us, call, or fill out our kaysville retail contact form today.",
    imagePath: "/heroes/kaysville-small-1x.jpg",
    urlPath: "/contact/kaysville",
  }
  return (
    <PageLayout
      heroImage="kaysville"
      ext="jpg"
      mainHeading="Botanicals Kaysville Contact"
      subHeading="Please fill out the form below with any questions you may have"
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
              imageName="kaysville-contact"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <RetailContactForm location="Kaysville" />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
