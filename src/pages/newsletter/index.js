import React from "react"

import "../../styles/main.scss"

import SubscribeForm from "../../components/SubscribeForm"
import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default () => {
  const seo = {
    title: "Subscribe to our Newsletter | Botanicals Design",
    description:
      "Subscribe to the BOTANICALS emailing list for shipment updates, professional tips and tricks, and updates and news about us. You choose what information you want to recieve.",
    imagePath: "/heroes/blog-small-1x.jpg",
    urlPath: "/newsletter/subscribe",
  }

  return (
    <PageLayout
      mainHeading="Botanicals Newsletter"
      subHeading="Subscribe for updates, news, and shipment notifications"
      pageHeading="Newsletter Subscription"
      heroImage="portfolios"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="">
        <Row>
          <Column width={50}>
            <p>
              We offer more than just pottery and decor at our retail locations.
              We are constantly evolving and growing at our stores. We are
              starting to implement more events, such as plantings, bonsai club
              meetings, and more.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Sign up for our Newsletter to stay updated on our events,
              shipments, and more.
            </h3>
            <p>
              Sign up for our retail locations newsletters to stay updated on
              what we have going on.
            </p>
          </Column>
          <Column width={50}>
            <SubscribeForm />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
