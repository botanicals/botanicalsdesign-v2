import React from "react"
import { Link } from "gatsby"

import Picture from "./Picture"
import Column from "./Column"
import Row from "./Row"
import Button from "./Button"

function Locations() {
  return (
    <>
      <Row>
        <Column width={100}>
          <h3 className="heading heading__h3 heading__h3--green">
            Visit our Retail Locations
          </h3>

          <p>
            We are always looking to expand our ability to help people enrich
            their lives. This is why we have{" "}
            <Link to="/locations">three retail locations</Link>. Visit us at
            these locations to find beautiful ceramic pottery, metal art, yard
            decor, plants, and more.{" "}
          </p>

          <p>
            If you are looking to liven up your home or yard then retail
            locations will provide you with the tool necessary to do that. Our
            staff are always happy to answer any questions to help with your
            designing. We have a lot to offer, and provide a delivery service
            for those who want it.
          </p>
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
          <Button href="/locations/kaysville">Botanicals Kaysville</Button>
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
          <Button href="/locations/sandy">Botanicals Sandy</Button>
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
          <Button href="/locations/saint-george">Botanicals St George</Button>
        </Column>
      </Row>
    </>
  )
}

export default Locations
