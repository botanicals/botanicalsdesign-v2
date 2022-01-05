import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"
import Locations from "../components/Locations"

export default () => {
  const seo = {
    title: "About Us | Botanicals Design",
    description:
      "BOTANICALS is family owned and operated. We were raised working alongside our parents, grandparents, uncles, and aunts and there learned to love the magic of green and growing things.",
    imagePath: "/heroes/about-small-1x.jpg",
    urlPath: "/about",
  }
  return (
    <PageLayout
      heroImage="about"
      ext="jpg"
      mainHeading="About Botanicals"
      subHeading="We are founded on four generations of plantscape and gardening experience"
      pageHeading="Learn about us"
      seo={seo}
    >
      <Section sectionHeading="We have a passion for plants">
        <Row>
          <Column width={50}>
            <p>
              Botanicals is family owned and operated. We continue a
              four-generation legacy of horticultural enterprises. We were
              raised working alongside our parents, grandparents, uncles and
              aunts on their family farm in Southern Utah and in the greenhouses
              and floral shop they operated in Northern Utah. There we learned
              to love the magic of green and growing things.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Nature is transcendent
            </h3>
            <p>
              We learned almost from infancy how to nurture them and how to use
              Mother Nature’s templates as a guide for using them as elements of
              design.We love bringing the natural world into the work and living
              spaces of our clients. It is absolutely transformative in a way
              that cannot only be seen, but can be felt. Simply put, plants make
              us happier and healthier.
            </p>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="about"
              breakpoint="default"
              imageName="botanicals-retail-counter-housten"
              ext="jpg"
              alt="Our employee Housten at our St George retail counter
              "
              caption="Our employee Housten at our St George retail counter
              "
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="We create beautiful plantscapes">
        <Row>
          <Column width={50}>
            <p>
              We offer custom plantscape&nbsp;
              <Link to="/services/design">designs and installations</Link>, as
              well as&nbsp;
              <Link to="/services/maintenance">
                plant maintenance accounts&nbsp;
              </Link>
              to care for your plants.&nbsp;
              <Link to="/request-consultation">
                Request a free consultation today
              </Link>
              &nbsp;to start designing your commercial or residential spaces.
            </p>

            <p>
              We love everything plantscapes. We grew up at Sandia Farms, a
              greenhouse owned and operated by our family in St George, Utah.
              There we developed a love for plants and helping other receive the
              positive effects of having their space plantscaped.
            </p>

            <p>
              In the last few years, we have also expanded our business to own
              three retail locations where we sell ceramic pottery, metal art,
              yard decor, and more. We have one{" "}
              <Link to="/locations/saint-george">
                location in St George, Utah
              </Link>
              ,{" "}
              <Link to="/locations/sandy">
                another further north in Sandy, Utah
              </Link>
              , and{" "}
              <Link to="/locations/kaysville">
                another even further north in Kaysville, Utah.
              </Link>
            </p>

            <Button href="/request-consultation">
              Request a free consultation today
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="about"
              breakpoint="default"
              imageName="living-wall-plantscape-design-system-2"
              ext="jpg"
              alt="A living wall &#8220;The Wall of Life&#8221; we created for Findlay Subaru in St George, Utah. 
              "
              caption="A living wall &#8220;The Wall of Life&#8221; we created for Findlay Subaru in St George, Utah. 
              "
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Botanicals is operated by siblings">
        <Row>
          <Column width={33}>
            <h3 className="heading heading__h3 heading__h3--green">
              Nicole Hancock
            </h3>
            <Picture
              column={50}
              page="about"
              imageName="botanicals-owner-nicole-hancock-2020"
              ext="jpg"
              alt="Botanicals owner Nicole Hancock"
              caption="Botanicals owner and sibling"
            />
          </Column>
          <Column width={33}>
            <h3 className="heading heading__h3 heading__h3--green">
              Braden Hancock
            </h3>
            <Picture
              column={50}
              page="about"
              imageName="botanicals-owner-braden-hancock-2020"
              ext="jpg"
              alt="Botanicals owner Braden Hancock"
              caption="Botanicals owner and sibling"
            />
          </Column>
          <Column width={33}></Column>
        </Row>
      </Section>
      {/* <Section sectionHeading="Team Botanicals">
        <Row>
          <Column width={100}>
            <p>
              We’ve operated in Southern Utah for 15 years and in 2017 expanded
              with the purchase of two retail locations. With this new growth in
              St. George and Sandy, Utah we have a greater opportunity to better
              serve our clients and bring more of our services to the public at
              large.{" "}
              <Link to="/locations">
                You can learn more about our retail locations here.
              </Link>
            </p>
          </Column>
        </Row>
        <Row>
          <Column width={25}>
            <Picture
              column={25}
              page="about"
              imageName=""
              ext="jpg"
              alt=""
              caption="Our service manager, Beth"
            />
          </Column>
          <Column width={25}>
            <Picture
              column={25}
              page="about"
              imageName=""
              ext="jpg"
              alt=""
              caption="One of our service technicians, Housten"
            />
          </Column>
          <Column width={25}>
            <Picture
              column={25}
              page="about"
              imageName=""
              ext="jpg"
              alt=""
              caption="Our Sandy Retail location manager, Dallin"
            />
          </Column>
          <Column width={25}>
            <Picture
              column={25}
              page="about"
              imageName=""
              ext="jpg"
              alt=""
              caption="A retail associate at our St George location, Teresa"
            />
          </Column>
        </Row>
      </Section> */}
      <Section sectionHeading="Want to learn more?">
        <Locations />
      </Section>
      <Section sectionHeading="A short video about us">
        <Row>
          <Column width={100}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DEPFsLoXXJY"
              allowFullScreen
              title="about-botanicals-video"
            ></iframe>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
