import React from "react"
// import { Link } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"
import Button from "../../components/Button"

export default () => {
  const seo = {
    title: "Your subscription has been confirmed | Botanicals Design",
    description:
      "Thank you for confirming your subscription to our emailing list.",
    urlPath: "/newsletter/confirmed",
  }
  return (
    <PageLayout
      mainHeading="Thank you"
      subHeading="Subscription confirmed"
      pageHeading="Your subscription was successfully confirmed"
      heroImage="portfolios"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="">
        <Row>
          <Column width={100}>
            <p>
              Thank you for confirming your subscription to our emailing list!
              We are excited to be in communication with you.
            </p>
            {/* <p>
              If at any time you need to update your subscription, please visit
              our{" "}
              <Link to="/newsletter/update-preferences">
                update newsletter preferences
              </Link>{" "}
              page and we will get your information changed.
            </p> */}
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
