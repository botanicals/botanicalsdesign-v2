import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  const seo = {
    title: "Prospective Clients | Botanicals Design",
    description:
      "We will help design any interior or exterior space, both commercial and residential. BOTANICALS also welcomes landscapers, architects, interior designers, and other design professionals, and will happily work to ensure we can fulfill your needs and help you achieve your goals.",
    imagePath: "/heroes/prospective-clients-small-1x.jpg",
    urlPath: "/prospective-clients",
  }

  return (
    <PageLayout
      heroImage="prospective-clients"
      ext="jpg"
      mainHeading="Prospective Clients"
      subHeading="We love helping our clients achieve their goals"
      pageHeading="Information for our future clients"
      seo={seo}
    >
      <Section sectionHeading="We are looking forward to working with you">
        <Row>
          <Column width={50}>
            <p>
              Whether you are a landscaper, architectural firm, interior
              designer, or individual,{" "}
              <Link to="/services">we offer our services </Link>
              and will happily work to be sure we can fulfill your needs. We
              have years of experience and know how to take the burden off your
              shoulders and help you achieve your goals.
            </p>

            <p>
              At this time, our services are limited to Southern Utah, but we
              are working to the trade in Northern Utah for design
              professionals.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              We ensure our clients achieve their goals
            </h3>

            <p id="residential">
              We are currently working hard to bring you information that you
              can learn from our website and utilize in making your plantscape
              decisions. Please come back to this page often to see new
              information and updates.
            </p>
            <Button href="/services">Learn more about our services</Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="office-space-plantscape-with-bromeliads-2"
              ext="jpg"
              alt="botanicals plantscape in office building"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Residential Spaces">
        <Row>
          <Column width={50}>
            <p>
              A sense of calm and control is something everybody wants in their
              home. We have found a way to achieve this: Plantscapes!
            </p>

            <p id="commercial">
              If you want to see what we design and install for homes, please{" "}
              <Link to="/portfolio/interior">
                look through our interior portfolio gallery
              </Link>
              . We don&#8217;t limit ourselves to interiors, however, so please{" "}
              <Link to="/portfolio/exterior">see our exterior portfolio</Link>{" "}
              as well to get an idea of our work.
            </p>
            <Button href="/request-consultation">
              Request a free consultation
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="couple-on-patio-by-pottery-plantscape"
              ext="jpg"
              alt="couple talking on a plantscaped patio"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Commercial Spaces">
        <Row>
          <Column width={50}>
            <p>
              When we make a Botanicals plantscape, we ensure quality and
              timeliness. We understand that a lot goes into building,
              designing, and maintaining commercial spaces.
            </p>

            <p>
              This is why we seek to take a burden off your shoulders and help
              you achieve your goals. After{" "}
              <Link to="/services/design">designing and installing</Link> the
              plantscapes, be sure to sign up for our{" "}
              <Link to="/services/maintenance">maintenance services</Link> to
              keep your plantscapes beautiful.
            </p>

            <Button href="/request-consultation">
              Request a free consultation
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="plantscape-design-custom-bronze-container-1"
              ext="jpg"
              alt="interior plantscape with custom containers at a subaru dealership"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Design Professionals">
        <Row>
          <Column width={50}>
            <h3
              className="heading heading__h3 heading__h3--green"
              id="architects"
            >
              Architects
            </h3>
            <p>
              We know that life can get too busy sometimes, and we are here to
              help. The interior plantscapes are sometimes a detail that cause
              stress and are a race against a timeline. We want to take that
              stress from you.
            </p>

            <p>
              As you can see in the picture to the right, we design beautiful
              plantscapes for spaces, and have worked on health clinics,
              airports, and hospitals, such as Intermountain Health Care
              locations, and the St George Airport. Please{" "}
              <Link to="/portfolio">look through our portfolios</Link> to see
              our work.
            </p>

            <p>
              We will help you get your designs done and beautified with
              plantscapes, pottery, and custom containers. And remember: we
              offer top-of-the-line maintenance services, taking all the stress
              out, and allowing you to enjoy the plantscapes yourself.
            </p>

            <Button href="/request-consultation">
              Request a free consultation
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="custom-container-plantscape-design-genomics1"
              ext="jpg"
              alt="custom container plantscape in ihc genomics"
              caption=""
            />
          </Column>
        </Row>

        <Row>
          <Column width={50}>
            <h3
              className="heading heading__h3 heading__h3--green"
              id="landscapers"
            >
              Landscapers
            </h3>
            <p>
              Botanicals loves landscapers! With the addition of{" "}
              <Link to="/locations">our retail stores</Link> in{" "}
              <Link to="/locations/sandy">Sandy</Link>,{" "}
              <Link to="/locations/saint-george">St George</Link>, and{" "}
              <Link to="/locations/kaysville">Kaysville</Link>, Utah we have
              been able to better serve landscaping businesses.{" "}
            </p>

            <p>
              We are currently working to build a Landscapers Program to
              implement at our stores. Please visit or contact our store closest
              to you to learn more information, and be sure to check back
              regularly for updates on the Botanicals Landscaper Program.
            </p>

            <Button href="/contact/sandy">Northern Utah</Button>
            <Button href="/contact/saint-george">Southern Utah</Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="outdoor-plantscape-ceramic-pottery"
              ext="jpg"
              alt="an outdoor botanicals plantscape"
              caption=""
            />
          </Column>
        </Row>

        <Row>
          <Column width={50}>
            <h3
              className="heading heading__h3 heading__h3--green"
              id="interior-designers"
            >
              Interior Designers
            </h3>
            <p>
              Working with Interior Designers to create beautiful interiors is a
              Botancials specialty.
            </p>

            <p>
              Whether we can help you distiguish your services or liven up (pun
              intended) your spaces with{" "}
              <Link to="/why-plantscape">plantscapes</Link>, we are here to help
              you achieve those goals.
            </p>

            <p>
              Please <Link to="/request-consultation">contact us</Link> if you
              have any questions, and be sure to check out our{" "}
              <Link to="/portfolio/interior">interior portfolio </Link>
              to see the work we can accomplish.
            </p>

            <Button href="/request-consultation">
              Request a free consultation
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="prospective-clients"
              breakpoint="default"
              imageName="plantscapes-interior-design-fiberstone-pots-1"
              ext="jpg"
              alt="an interior botanicals plantscape"
              caption=""
            />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
