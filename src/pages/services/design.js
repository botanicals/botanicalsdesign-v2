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
    title: "Custom Plantscape Designs | Botanicals Design",
    description:
      "Whether indoors or out, BOTANICALS gets in the the details of space usage, lighting, traffic flow, and decor to seamlessly enhance your space with the addition of plants and containers. Request a free consultation today to get started.",
    imagePath: "/heros/design-small-1x.jpg",
    urlPath: "/services/design",
  }
  return (
    <PageLayout
      heroImage="design"
      ext="jpg"
      mainHeading="Our Design Process"
      subHeading="Change your space, change your life"
      pageHeading="From concept to reality"
      seo={seo}
    >
      <Section sectionHeading="Learn Our Design Process">
        <Row>
          <Column width={50}>
            <p>
              When you decide you are ready for a Botanicals design consultation
              a member of our team will come to your location and meet with you
              to collaborate in the creation of your plantscape. Whether indoors
              or out we get into the details of space usage, lighting, traffic
              flow, and décor to seamlessly integrate a plan for the addition of
              plants and containers to enhance your space.
            </p>
            <Button href="/request-consultation">
              Request a Free Consultation Today
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="design"
              breakpoint="default"
              imageName="botanicals-free-design-consultation"
              ext="jpg"
              alt="a design consultation in progress"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="The Botanicals Design Process">
        <Row>
          <Column width={25}>
            <div className="background-color-orange centered">
              <img src="/assets/icons/design/discovery.png" alt="discovery" />
            </div>
          </Column>
          <Column width={25}>
            <div className="background-color-orange-green centered">
              <img src="/assets/icons/design/design.png" alt="design" />
            </div>
          </Column>
          <Column width={25}>
            <div className="background-color-green-orange centered">
              <img src="/assets/icons/design/install.png" alt="install" />
            </div>
          </Column>
          <Column width={25}>
            <div className="background-color-green centered">
              {" "}
              <img src="/assets/icons/design/maintain.png" alt="maintain" />
            </div>
          </Column>
        </Row>

        {/* DISCOVERY */}
        <Row>
          <Column width={50}>
            <div className="discovery-div">
              <img src="/assets/icons/design/discovery.png" alt="discovery" />
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-orange">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/objective.png"
                      alt="objective"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Objective Review</h3>
                  <p className="paragraph--white">
                    Our initial consultation is always free and allows us the
                    opportunity to understand the scope of the project and needs
                    of our client.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/compass.png"
                      alt="compass"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Spatial Analysis</h3>
                  <p className="paragraph--white">
                    Each space we enhance takes into consideration the
                    environmental aspects of light, traffic patterns, air flow,
                    and the scale, patterns, textures of the overall ambience.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>

        {/* DESIGN */}
        <Row>
          <Column width={50}>
            <div className="design-div">
              <img src="/assets/icons/design/design.png" alt="design" />
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-orange-green">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/palette.png"
                      alt="palette"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Design Concepting</h3>
                  <p className="paragraph--white">
                    We make recommendations and show you the containers and
                    plant choices best suited to your needs and goals.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/thumb.png"
                      alt="thumb"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Plan Review</h3>
                  <p className="paragraph--white">
                    We collaborate with you to solidify the direction of the
                    process and make any changes necessary.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/dollar.png"
                      alt="dollar"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Budget</h3>
                  <p className="paragraph--white">
                    We carefully walk you through the budget and make sure all
                    your questions are answered.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>

        {/* INSTALL */}
        <Row>
          <Column width={50}>
            <div className="install-div">
              <img src="/assets/icons/design/install.png" alt="install" />
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-green-orange">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/calendar.png"
                      alt="calendar"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Scheduling</h3>
                  <p className="paragraph--white">
                    We schedule our installations to be efficient and as
                    unobtrusive as possible to your work flow or home life.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/thumb.png"
                      alt="thumb"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Install</h3>
                  <p className="paragraph--white">
                    On your installation day our experts transport and place
                    your new plantscape.
                  </p>
                </Column>
              </Row>

              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/plant-pot.png"
                      alt="plant-pot"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Clean Up</h3>
                  <p className="paragraph--white">
                    We at Botanicals are plant geeks and neat freaks! We love
                    working in the dirt, but your place will be spic and span
                    when we leave.
                  </p>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>

        {/* MAINTAIN */}
        <Row>
          <Column width={50}>
            <div className="maintain-div">
              <img src="/assets/icons/design/maintain.png" alt="maintain" />
            </div>
          </Column>
          <Column width={50}>
            <div className="background-color-green">
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/drop.png"
                      alt="drop"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Plant Care</h3>
                  <p className="paragraph--white">
                    Our technicians carefully maintain soil moisture and
                    content, pest control, cleanliness, humidification, and
                    proper fertilization to keep your plantscape thriving.
                  </p>
                </Column>
              </Row>
              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/plant.png"
                      alt="plant"
                      className="process-icon"
                    />
                  </div>
                </Column>
                <Column width={66}>
                  <h3 className="heading--white">Appearance</h3>
                  <p className="paragraph--white">
                    We ensure the life and beauty of your plantscape with our
                    52-point inspection at regular intervals.
                  </p>
                </Column>
              </Row>

              <Row>
                <Column width={33}>
                  <div className="process-icon-container">
                    <img
                      src="/assets/icons/design/plant-pot.png"
                      alt="plant-pot"
                      className="process-icon"
                    />
                  </div>
                </Column>

                <Column width={66}>
                  <h3 className="heading--white">Replacement</h3>
                  <p className="paragraph--white">
                    Should a plant decline in health or appearance our
                    full-guarantee service agreement covers a speedy replacement
                    at no additional charge to you.
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
