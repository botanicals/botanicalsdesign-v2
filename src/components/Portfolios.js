import React from "react"

import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

function Portfolios() {
  return (
    <Section sectionHeading="See our Portfolios">
      <Row>
        <Column width={100}>
          <h3 className="heading heading__h3 heading__h3--green">Indoor</h3>
          <p>
            Indoors we work with a broad palate of tropical plants to bring
            these powerful oxygenators inside to enhance homes and workspaces.
            Our plantings bring style and vitality into the rooms they grace. We
            pair them with exquisite container options and the best planting
            mediums to bring our clients living art that not only looks
            fantastic but serves to filter, humidify, and purify the air.
          </p>

          <Button href="/portfolio/interior">View Interior Portfolio</Button>
        </Column>
      </Row>
      <Row>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="hallway-plantscape-design-2"
            ext="jpg"
            alt="Findlay Subaru 'Wall of Life'"
            caption=""
          />
        </Column>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="entryway-fiddle-leaf-fig-in-container"
            ext="jpg"
            alt="St George Parade of Homes 2020"
            caption=""
          />
        </Column>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="wall-planters-pothos-containers-plantscape"
            ext="jpg"
            alt="IHC Genomics waiting area"
            caption=""
          />
        </Column>
      </Row>
      <Row>
        <Column width={100}>
          <h3 className="heading heading__h3 heading__h3--green">Outdoor</h3>
          <p>
            Outdoors we use container gardening to create focal points to new or
            existing landscapes and patios. We use combinations of annual and
            perennial plantings to add punctuation and gorgeous architectural
            elements that stand the test of time. In addition to our outdoor
            containers and plantings we offer garden décor item. We have
            free-standing water fountains and can convert almost any of our
            high-fired pottery pieces into a water feature. We also offer
            customized fire features, and décor items that help pull everything
            together and reveal your own flair.
          </p>
          <Button href="/portfolio/exterior">View Exterior Portfolio</Button>
        </Column>
      </Row>
      <Row>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="pottery-plantscape-by-path"
            ext="jpg"
            alt="Findlay Subaru 'Wall of Life'"
            caption=""
          />
        </Column>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="pottery-plantscape-design-on-stairs"
            ext="jpg"
            alt="St George Parade of Homes 2020"
            caption=""
          />
        </Column>
        <Column width={33}>
          <Picture
            column={33}
            page="portfolios"
            imageName="ceramic-pottery-plantscape-bbq-patio"
            ext="jpg"
            alt="IHC Genomics waiting area"
            caption=""
          />
        </Column>
      </Row>
    </Section>
  )
}

export default Portfolios
