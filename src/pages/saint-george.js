import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"
import RetailContactForm from "../../components/RetailContactForm"

export default () => {
  const seo = {
    title: "Saint George Retail Contact | Botanicals Design",
    description:
      "Our trained staff are always happy to answer your questions or assist in any way. Visit us, call, or fill out our Saint George retail contact form today.",
    imagePath: "/heroes/st-george-small-1x.jpg",
    urlPath: "/contact/saint-george",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals St George Contact"
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
              imageName="st-george-contact"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <RetailContactForm location="Saint George" />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
