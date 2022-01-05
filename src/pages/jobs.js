import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"

export default () => {
  const seo = {
    title: "Jobs - Join our Team | Botanicals Design",
    description:
      "We are seeking self-starters and reliable people to join our team who will help make BOTANICALS great.",
    imagePath: "/heroes/exterior-portfolio-small-1x.jpg",
    urlPath: "/jobs",
  }
  return (
    <PageLayout
      heroImage="jobs"
      ext="jpg"
      mainHeading="Work with us"
      subHeading="Join the Botanicals family"
      pageHeading="Current Job Openings"
      seo={seo}
    >
      <Section sectionHeading="View all Open Positions">
        <Row>
          <Column width={100}>
            <p>
              To view all open positions currently available at Botanicals,
              please{" "}
              <OutboundLink
                target="_blank"
                href="https://app.joinhomebase.com/cmp/botanicals-inc-stg"
              >
                visit our job board.
              </OutboundLink>
            </p>
            <Button
              target="_blank"
              href="https://app.joinhomebase.com/cmp/botanicals-inc-stg"
            >
              View all Open Positions
            </Button>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--green">
              Kaysville, UT
            </h3>
            <p>
              If you have any questions or would like to inquire about jobs{" "}
              <Link to="/contact/kaysville">
                please contact Kaysville here.
              </Link>
            </p>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--green">
              Sandy, UT
            </h3>
            <p>
              If you have any questions or would like to inquire about jobs{" "}
              <Link to="/contact/sandy">please contact Sandy here.</Link>
            </p>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--green">
              St George, UT
            </h3>
            <p>
              If you have any questions or would like to inquire about jobs{" "}
              <Link to="/contact/saint-george">
                please contact St George here.
              </Link>
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
