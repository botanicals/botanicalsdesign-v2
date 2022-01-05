import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"
import RetailContactForm from "../../components/RetailContactForm"

export default () => {
  const seo = {
    title: "Sandy Retail Contact | Botanicals Design",
    description:
      "Our trained staff are always happy to answer your questions or assist in any way. Visit us, call, or fill out our Sandy retail contact form today.",
    imagePath: "/heroes/sandy-small-1x.jpg",
    urlPath: "/contact/sandy",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals Sandy Contact"
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
              imageName="sandy-contact"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <RetailContactForm location="Sandy" />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
