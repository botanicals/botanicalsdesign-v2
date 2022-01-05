import React from "react"
import { graphql } from "gatsby"
//import { OutboundLink } from "gatsby-plugin-google-gtag"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

import SubscribeForm from "../../components/SubscribeForm"
import Gallery from "../../components/Gallery"

export default ({ data }) => {
  const seo = {
    title: "Botanicals Garden Center in Kaysville, UT | Botanicals Design",
    description:
      "Botanicals Kaysville is pleased to focus on serving the needs of home owners by providing top quality trees, shrubs, vegetables, herbs, flowers, and houseplants. We also offer a full range of soils, fertilizers, garden tools, and pest and weed management. We look forward to adding classes and community outreach programs in the near future.",
    imagePath: "/heroes/kaysville-small-1x.jpg",
    urlPath: "/locations/kaysville",
  }
  return (
    <PageLayout
      heroImage="kaysville"
      ext="jpg"
      mainHeading="Botanicals Kaysville"
      subHeading="Our newest destination for all your indoor and outdoor gardening needs"
      pageHeading="About us"
      seo={seo}
    >
      <Section sectionHeading="Botanicals launches its first full-scale retail gardening center">
        <Row>
          <Column width={50}>
            <p>
              Botanicals is proud to announce our newest retail location in
              Kaysville, Utah. Through a unique partnership with Tri City
              Nursery, Botanicals will now operate the retail aspect of serving
              the general public, while Tri City Nursery shifts its focus back
              toward serving landscapers and contractors.
            </p>
            <p>
              Botanicals is pleased to focus on serving the needs of home owners
              in providing top quality trees, shrubs, vegetables, herbs,
              flowers, and houseplants. We also offer a full range of soils,
              fertilizers, garden tools, and pest and weed management. We also
              look forward to adding classes and community outreach programs.
            </p>
            <p>
              Come visit our newest location to see for yourself and find that
              perfect piece for your outdoor or indoor design.
            </p>

            <h3 className="heading heading__h3 heading__h3--green">
              Questions? Reach out to us.
            </h3>

            <Button tel="tel:8015892055">801.589.2055</Button>
            <Button href="/contact/kaysville">Email us</Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="kaysville"
              breakpoint={1200}
              imageName="botanicals-kaysville-garden-center"
              ext="jpg"
              alt="our garden center in kaysville, utah"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Visit Us in Kaysville Today">
        <Row>
          <Column width={50}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.776193650648!2d-111.95259928428062!3d41.030152126026806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752ff4aeab7a34d%3A0x8e6b53cc30854ea8!2sBotanicals!5e0!3m2!1sen!2sus!4v1616472731580!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              title="kaysville-map"
            ></iframe>
          </Column>
          <Column width={50}>
            <h3 className="heading heading__h3 heading__h3--green">Address</h3>

            <h4 className="heading heading__h4 heading__h4--red">
              We are temporarily sharing office space with Tri City Nursery
            </h4>

            <p>395 S Deseret Drive</p>

            <p>Kaysville, Utah 84037</p>

            <p>
              We ask for your patience in this time of transition. Tri City
              Nursery is in the process of building a new office space nearby.
              We will update you as soon as their move is permanent.
            </p>

            <h3 className="heading heading__h3 heading__h3--green">
              Spring &amp; Summer Hours
            </h3>

            <h5 className="heading heading__h5 heading__h5--red">
              <strong>March &#8211; October</strong>
            </h5>

            <p>Monday &#8211; Saturday 8:00AM &#8211; 6:00PM</p>

            <h3 className="heading heading__h3 heading__h3--green">
              Winter Hours
            </h3>

            <h5 className="heading heading__h5 heading__h5--red">
              <strong>November &#8211; February</strong>
            </h5>

            <p>Monday &#8211; Saturday 9:00AM &#8211; 4:00PM</p>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Contractors and Landscape Professionals">
        <Row>
          <Column width={100}>
            <p>
              While we are focused on serving the needs of homeowners with the
              garden center, Tri City Nursery is focused on serving you.
            </p>
            <Button
              target="_blank"
              href="https://tricitynurseryutah.com/"
              external
            >
              Tri City Nursery
            </Button>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Gallery">
        <Row>
          <Column width={100}>
            <Gallery images={data.images.edges} />
          </Column>
        </Row>
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
    </PageLayout>
  )
}

export const query = graphql`
  query {
    images: allCloudinaryMedia(filter: { public_id: { glob: "kaysville/*" } }) {
      edges {
        node {
          secure_url
          context {
            custom {
              alt
              columns
              rows
            }
          }
          resource_type
        }
      }
    }
  }
`
