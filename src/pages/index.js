import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Picture from "../components/Picture"
import Button from "../components/Button"
import Locations from "../components/Locations"
import SubscribeForm from "../components/SubscribeForm"

const ctaBanner = {
  heading: "It's time for Fall Planting!",
  text: "Visit our Kaysville location for your perennials, shrubs, and trees.",
  buttonText: "Take me to Kaysville",
  buttonHref: "/locations/kaysville",
}

export default () => {
  const seo = {
    title: "Botanicals Design",
    urlPath: "INDEX",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Welcome to Botanicals"
      subHeading="Kaysville | Sandy | St. George"
      pageHeading="Who we are"
      link="/locations"
      seo={seo}
      altBanner
      altImage="/heroes-alt/home.jpg"
      cta={ctaBanner}
    >
      <Section sectionHeading="We create beautiful plantscapes">
        <Row>
          <Column width={50}>
            <p>
              Botanicals is a family-owned business operating out of St George,
              Utah. We offer custom plantscape{" "}
              <Link to="/services/design/">designs and installations</Link>, as
              well as{" "}
              <Link to="/services/maintenance/">
                plant maintenance accounts{" "}
              </Link>
              to care for your plants.{" "}
              <Link to="/request-consultation/">
                Request a free consultation today
              </Link>{" "}
              to start designing your commercial or residential spaces.
            </p>

            <p>
              At this time, our services are in Southern Utah only, but we are
              also working to the trade only in Northern Utah for design
              professionals.
            </p>

            <p>
              We love everything plantscapes. We grew up at Sandia Farms, a
              greenhouse owned by our father in St George, Utah. There we
              developed a love for plants and helping others receive the
              positive effects of having their space plantscaped.
            </p>

            <p>
              In the last few years, we have also expanded our business to own
              three retail locations where we sell ceramic pottery, metal art,
              yard decor, and more. We have one location in{" "}
              <Link to="/locations/saint-george/">St George, Utah</Link>
              ,another further north in{" "}
              <Link to="/locations/sandy/">Sandy, Utah</Link>, and another even
              further north in{" "}
              <Link to="/locations/kaysville/">Kaysville, Utah</Link>.
            </p>
            <Button href="/request-consultation">
              Request a free consultation today
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint="default"
              imageName="botanicals-owners-nicole-braden-hancock"
              ext="jpg"
              alt="Botanicals owners and siblings Braden and Niki Hancock."
              caption=" Botanicals owners and siblings Braden and Niki Hancock."
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="A Botanicals plantscape">
        <Row>
          <Column width={100}>
            <p>
              We pride ourselves on our work creating plantscapes that breathe
              quality and peace back into life. Whether you are looking to liven
              up your home, workspace, or yard, we have the perfect
              life-injecting solutions you are needing. Please{" "}
              <Link to="/portfolio">visit our portfolio</Link> to see examples
              of our most recent work.
            </p>
            <Button href="/portfolio">Visit our portfolio</Button>
          </Column>
        </Row>
        <Row>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="living-wall-plantscape-design-waiting-area-3"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=" Findlay Subaru 'Wall of Life'"
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="botanicals-plantscape-design-parade-of-homes-107"
              ext="jpg"
              alt="St George Parade of Homes 2020"
              caption="St George Parade of Homes 2020"
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="aglaonema-in-ceramic-sphere-sitting-area"
              ext="jpg"
              alt="IHC Genomics waiting area"
              caption="IHC Genomics waiting area"
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="We love our clients">
        <Row>
          <Column width={50}>
            <p>
              Being a family business, we strive for one-on-one, personable
              contact with our clients. We will work with you to customize
              plantscapes and decor to fit all of your needs.
            </p>

            <p>
              <Link to="/request-consultation/">
                Request a free consultation
              </Link>
              , and we will work with you through the entire process of getting
              your plantscapes planned, designed, and installed, relieving you
              from the worry of hitting your deadline. At this time, our
              services are in Southern Utah only, but we are also working to the
              trade only in Northern Utah for design professionals.
            </p>

            <p>
              We design for both commercial and residential spaces, indoor and
              outdoor. We often work closely with Architects, Interior
              Designers, and Landscapers.
            </p>

            <Button href="prospective-clients">
              Learn how we work with our clientele&#8230;
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="custom-container-plantscape-design-genomics"
              ext="jpg"
              alt="A custom S-shaped planter we designed for IHC Genomics"
              caption=" A custom S-shaped planter we designed for IHC Genomics"
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="Even more than plantscape design">
        <Row>
          <Column width={50}>
            <p>
              After installing your custom designed plantscape, we don&#8217;t
              leave you to care for it all by yourself. We offer our{" "}
              <Link to="/services/maintenance/">
                plant maintenance services
              </Link>{" "}
              to all of our clients.
            </p>

            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Our expertly trained service technicians will ensure that your
              plantscapes stay alive, healthy, and beautiful.
            </h3>

            <Button href="/services/maintenance">
              Learn more about our maintenance service
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="botanicals-maintenance-service-technician-beth-1"
              ext="jpg"
              alt="Botanicals maintenance service ensures your plantscapes stay beautiful"
              caption="Botanicals maintenance service ensures your plantscapes stay beautiful"
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="Why we love creating plantscapes">
        <Row>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="botanicals-plantscape-design-parade-of-homes-105"
              ext="jpg"
              alt="2020 St George Parade of Homes Botanicals interior"
              caption="2020 St George Parade of Homes Botanicals interior"
            />
          </Column>
          <Column width={50}>
            <p>
              People stay longer in places that make them feel at peace. It is
              proven that plantscapes decrease stress, promote health, increase
              productivity. Plants purify the air around them and create an
              atmosphere of serenity. This is
              <Link to="/why-plantscape">
                {" "}
                why we want our plantscapes everywhere
              </Link>
              . We are a family of plant-lovers and we always look forward to
              helping others discover what plantscapes can do for them.
            </p>

            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Want to learn more about Plantscapes? We have a blog!
            </h3>

            <Button href="/blog">Visit our blog</Button>
          </Column>
        </Row>
      </Section>
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
