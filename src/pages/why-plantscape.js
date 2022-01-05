import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

import Locations from "../components/Locations"
import Portfolios from "../components/Portfolios"

export default () => {
  const seo = {
    title: "Why Plantscape? | Botanicals Design",
    description:
      "When we spend time in plantscaped spaces, we get happier, we get clamer, we feel at peace. Our mission at BOTANICALS is to provide everyone the perfect plantscape, indoor or outdoor. Let us explain why.",
    imagePath: "/heroes/why-plantscape-small-1x.jpg",
    urlPath: "/why-plantscape",
  }

  /* [TO DO] fix all the image captions and alts (and fix the image under the 'quality of life' heading) */
  /* [TO DO] fix the problem with the locations component */

  return (
    <PageLayout
      heroImage="why-plantscape"
      ext="jpg"
      mainHeading="Why Plantscape?"
      subHeading="Plantscapes are the evolution of living design"
      pageHeading="A Botanicals Plantscape"
      seo={seo}
    >
      <Section sectionHeading="Plantscapes add Vitality and Balance to our Lives">
        <Row>
          <Column width={50}>
            <p>
              &#8216;Biophilia&#8217; means a love of life; a desire to be
              around nature, plants, and flowers. There is something special
              that happens when we are around plants: We get happier, we get
              calmer, we feel at peace. This effect plants have on us has been
              scientifically coined &#8220;The Biophilia Effect.&#8221; At
              Botanicals, we love to discuss the positive effects plantscapes
              have in our lives, and we love creating plantscapes for our
              clients that maximize that positivity.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Want to Learn More? Visit our Blog.
            </h3>
            <Button href="/blog">Visit our blog</Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="why-plantscape"
              breakpoint="default"
              imageName="pottery-plantscape-succulent-green-closeup"
              ext="jpg"
              alt="close up of succulents at entrada in st george"
              caption="Entrada in St George Succulent Closeup"
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Allow us to Increase Your Quality of Life">
        {/* [TO DO] fix the image sizes to match the 33% width */}
        <Row>
          <Column width={33}>
            <Picture
              column={50}
              page="why-plantscape"
              imageName="plant-basket-botanicals-teresa"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=""
            />
          </Column>

          <Column width={66}>
            <p>
              Botanicals was founded on the promise of making the world a more
              beautiful and healthful place. Human existence is based upon the
              intimate interactions we have with plant life. From the physical
              benefits of the air and food we consume to the psychological and
              physiological effects of enjoyment, reprieve, and peace, plants
              add vitality and balance to our lives.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Human existence is based upon intimate interactions with plant
              life.
            </h3>
            <p>
              We love participating in the creation of indoor and outdoor
              container gardening. You can come to us for expert advise on
              do-it-yourself projects or rely upon our team for everything from{" "}
              <Link to="/services/design">design services</Link>,{" "}
              <Link to="/services/design">customized plantings</Link>,{" "}
              <Link to="/services/design">installation</Link>, and{" "}
              <Link to="/services/maintenance">ongoing maintenance</Link>. Our
              aim is to bring our clients beauty and respite through the natural
              elements we incorporate in all our plantscapes.
            </p>
            <Button href="/request-consultation">
              Request a Free Consultation
            </Button>
          </Column>
        </Row>
      </Section>

      <Portfolios />

      <Section sectionHeading="Bring Life to Your Space">
        <p>
          At Botanicals’ retail locations you can find a range of pottery,
          planters, garden accessories and plant-themed décor for your home and
          outdoor spaces. We have a lot to discover in our St. George and Sandy
          locations. Come visit us for expert advise in the design your own
          indoor or outdoor plantscapes or browse our selection of
          botanical-themed gifts and décor.
        </p>
        <Locations />
      </Section>
    </PageLayout>
  )
}
