import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"

import SubscribeForm from "../components/SubscribeForm"
import Locations from "../components/Locations"

export default () => {
  const seo = {
    title: "Our Retail Locations | Botanicals Design",
    description:
      "If you are looking to liven up the spaces you spend your time in, BOTANICALS retail locations will provide you with the pottery, containers, metal art, and decor you need to do just that.",
    imagePath: "/heroes/locations-small-1x.jpg",
    urlPath: "/locations",
  }
  return (
    <PageLayout
      heroImage="locations"
      ext="jpg"
      mainHeading="Our retail locations"
      subHeading="Serving the wasatch front and southern utah"
      pageHeading="Bring life to your space"
      seo={seo}
    >
      <Section sectionHeading="Bring life to your space">
        <Locations />
      </Section>
      <Section sectionHeading="More than just pots&#8230;">
        <Row>
          <Column width={50}>
            <p>
              We offer more than just pottery and decor at our retail locations.
              We are constantly evolving and growing at our stores. We are
              starting to implement more events, such as plantings, bonsai club
              meetings, and more.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Become an Botanicals Design Insider to stay updated...
            </h3>
          </Column>
          <Column width={50}>
            <SubscribeForm />
          </Column>
        </Row>
      </Section>
      {/* <Section sectionHeading="Upcoming events">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--green">
              Upcoming Events
            </h3>
            <p>
              Unfortunately, during this time of uncertainty, all Botanicals
              events are postponed/canceled.
            </p>
            <Button href="#">
              View all events
            </Button>
          </Column>
        </Row>
      </Section> */}
    </PageLayout>
  )
}
