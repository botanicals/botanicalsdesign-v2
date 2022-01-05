import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

export default () => {
  const seo = {
    title: "Plantscape Maintenance Service | Botanicals Design",
    description:
      "We can help you continue the life and beauty of your investment into your space with a plantscape maintenance service package. We provide options suitable to your budget, ranging from a full-service full-guarantee plan to a once a month or on-call check in plans for the do-it-yourselfers.",
    imagePath: "/heros/maintenance-small-1x.jpg",
    urlPath: "/services/maintenance",
  }
  return (
    <PageLayout
      heroImage="maintenance"
      ext="jpg"
      mainHeading="Botanicals Maintenance"
      subHeading="Never let beauty fade"
      pageHeading="Plantscape maintenance"
      seo={seo}
    >
      <Section sectionHeading="Keep your Plantscapes Beautiful">
        <Row>
          <Column width={50}>
            <p>
              After your plantscape is installed we can help you with a service
              package to continue the life and beauty of your investment. We
              provide options suitable to your budget. Ranging from a
              full-service full-guarantee plan to a once a month or on-call
              check in plans for the do-it-yourselfers. Our highly-trained
              technicians follow our very own 52-point quality checklist and
              keep your plantscape vibrant and growing. We can also add seasonal
              rotating blooming plants for the focal points in your space.
            </p>

            <h2 className="heading heading__h2 heading__h2--green heading__quote">
              Continue the life and beauty of your investment
            </h2>

            <p>
              Our plant technicians are screened, background-checked, and
              professional. They are uniformed and bring with them everything
              they need to get the job done. We know when you chose Botanicals
              for your maintenance we become a part of how your workspace or
              household functions. It is a position of trust that we treat with
              the utmost care.
            </p>

            <p>
              If you already have plants that need a boost or a service to keep
              looking their best please contact us for a free evaluation and
              price quote.
            </p>

            <Button href="/request-consultation">
              Request a free consultation today
            </Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="maintenance"
              breakpoint="default"
              imageName="ihc-lobby-interior-plantscape"
              ext="jpg"
              alt="interior plantscape in ihc st george"
              caption="Lobby Interior Plantscape at IHC in St George"
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Botanicals Plantscape Maintenance">
        {/* TRAINING */}
        <Row>
          <Column width={50}>
            <div className="technician-div">
              <img
                src="/assets/icons/maintenance/trained.png"
                alt="trained technicians"
                className="maintenance-process-icon"
              />
              <h1 className="heading heading__h1 maintenance-process-heading">
                Professionally Trained Technicians
              </h1>
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-orange">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/maintenance/book.png"
                      alt="book"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Rigorous Training</h3>
                  <p className="paragraph--white">
                    Botanicals’ technicians become experts in the care and
                    maintenance of interior plants. Our program includes
                    collegiate-level botany courses, hands-on training, and
                    ongoing collaboration with other technicians in the field.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/maintenance/bestpractice.png"
                      alt="graph"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Progressive Practices</h3>

                  <p className="paragraph--white">
                    Botanicals is continually pursuing new ways of creating
                    efficiencies and tools for our technician’s implementation.
                    We create a standard of best practices that raises the bar
                    of expectation.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>

        {/* QUALITY */}
        <Row>
          <Column width={50}>
            <div className="quality-div">
              <img
                src="/assets/icons/maintenance/trained.png"
                alt="quality control"
                className="maintenance-process-icon"
              />
              <h1 className="heading heading__h1 maintenance-process-heading">
                Quality Control
              </h1>
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-green-orange">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/maintenance/inspection.png"
                      alt="inspection"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">52-Point Inspection</h3>
                  <p className="paragraph--white">
                    At Botanicals we recognize that if our plants don’t look
                    good, you don’t look good. We ensure not only the life, but
                    the beauty of your plantscape. This means a 52- point Q.C.
                    checklist for our technicians, regular visits by our service
                    manager and a focus on the details of each plant in our
                    care.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/maintenance/calendar.png"
                      alt="calendar"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Regular Inspections</h3>

                  <p className="paragraph--white">
                    We perform regular inspections by our quality control
                    manager to maintain and keep up the appearance of your
                    plantscape.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>

        {/* REPLACEMENT */}
        <Row>
          <Column width={50}>
            <div className="replacement-div">
              <img
                src="/assets/icons/maintenance/replacement.png"
                alt="plant replacement"
                className="maintenance-process-icon"
              />
              <h1 className="heading heading__h1 maintenance-process-heading">
                Plant Replacement
              </h1>
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-green">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/maintenance/plant-pot.png"
                      alt="plant-pot"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">The Botanicals Guarantee</h3>
                  <p className="paragraph--white">
                    If a plant declines in health or appearance, we guarantee a
                    speedy replacement at no additional charge. Botanicals
                    ensures a hassle-free experience and your complete
                    satisfaction.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>
        <div style={{ fontSize: "10px", textTransform: "uppercase" }}>
          Icons made by{" "}
          <OutboundLink
            title="SimpleIcon"
            href="https://www.flaticon.com/authors/simpleicon"
            rel="noopener noreferrer"
            target="_blank"
          >
            SimpleIcon
          </OutboundLink>{" "}
          from{" "}
          <OutboundLink
            title="Flaticon"
            href="https://www.flaticon.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.flaticon.com
          </OutboundLink>{" "}
          and is licensed by{" "}
          <OutboundLink
            title="Creative Commons BY 3.0"
            href="http://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </OutboundLink>
        </div>
      </Section>
    </PageLayout>
  )
}
