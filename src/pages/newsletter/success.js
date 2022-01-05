import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"
import Button from "../../components/Button"

export default () => {
  const seo = {
    title: "Thank you for your subscription | Botanicals Design",
    description:
      "Thank you for subscribing to our emailing list. Please confirm your subscription to start recieving emails.",
    urlPath: "/newsletter/success",
  }
  return (
    <PageLayout
      mainHeading="Thank you"
      subHeading="Subscription successful"
      pageHeading="Please confirm your subscription"
      heroImage="blog"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="">
        <Row>
          <Column width={100}>
            <p>
              Thank you for subscribing to our emailing list! We are excited to
              be in communication with you.
            </p>
            <p>
              <strong>IMPORTANT: </strong> If this is your first time
              subscribing, please visit your email to confirm your subscription.
              You will NOT recieve emails until you have confirmed your
              subscription via email. If you do not recieve a confirmation
              email, try checking your spam. The email could have accidentally
              been sent there by your filters.
            </p>
            <p>Feel free to explore our site to learn more about what we do.</p>
            <h3 className="heading heading__h3 heading__h3--green">
              Visit us at our retail locations
            </h3>
          </Column>
        </Row>
        <Row>
          <Column width={33}>
            <Picture
              column={33}
              page="locations_comp"
              imageName="botanicals-kaysville-retail-location"
              ext="jpg"
              alt="Botanicals Kaysville retail location"
              caption=""
            />
            <Button href="/locations/kaysville">
              Visit Botanicals Kaysville
            </Button>
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="locations_comp"
              imageName="botanicals-sandy-retail-location"
              ext="jpg"
              alt="Botanicals Sandy retail location"
              caption=""
            />
            <Button href="/locations/sandy">Visit Botanicals Sandy</Button>
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="locations_comp"
              imageName="botanicals-st-george-retail-location"
              ext="jpg"
              alt="Botanicals St George retail location"
              caption=""
            />
            <Button href="/locations/saint-george">
              Visit Botanicals St George
            </Button>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
