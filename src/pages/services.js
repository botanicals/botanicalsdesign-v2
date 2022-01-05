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
    title: "Plantscape Design and Maintenance Services | Botanicals Design",
    description:
      "BOTANICALS provides plantscape design and maintenance services. We will work with you to achieve your dealines and relieve your worry by getting your plantscapes designed and installed, and even then stick by you to make sure your custom plantscape is maintained and stays beautiful.",
    imagePath: "/heroes/services-small-1x.jpg",
    urlPath: "/services",
  }

  return (
    <PageLayout
      heroImage="services"
      ext="jpg"
      mainHeading="Services"
      subHeading="We look forward to working with you"
      pageHeading="We design, install, and maintain plantscapes"
      seo={seo}
    >
      <Section sectionHeading="Design and Installation">
        <Row>
          <Column width={50}>
            <p>
              Request a free consultation, and we will work with you through the
              entire process of getting your plantscapes planned, designed, and
              installed, relieving you from the worry of hitting your deadline.
            </p>
            <p>
              We design for both commercial and residential spaces, indoor and
              outdoor. We often work closely with Architects, Interior
              Designers, and Landscapers.
              <Link to="/prospective-clients">
                Learn more about how we work with our clientele&#8230;
              </Link>
            </p>
            <Button href="/services/design">Learn our design process</Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="services"
              breakpoint="default"
              imageName="botanicals-design-sketches"
              ext="jpg"
              alt="A sketch drawn during our plantscape designing phase"
              caption="A sketch drawn during our plantscape designing phase"
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Maintenance">
        <Row>
          <Column width={50}>
            <p>
              After installing your custom designed plantscape, we don&#8217;t
              leave you to care for it all by yourself. We offer our plant
              maintenance services to all of our clients.
            </p>

            <p>
              Our team of Service Technicians are led by our experienced Service
              Manager, Beth. She and our technicians will work with you to
              ensure your plantscapes stay beautiful.
            </p>
            <Button href="/services/maintenance">
              Learn about our maintenance service
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="services"
              breakpoint="default"
              imageName="botanicals-maintenance-dallin"
              ext="jpg"
              alt="botanicals plant maintenance service"
              caption="botanicals plant maintenance service"
            />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
