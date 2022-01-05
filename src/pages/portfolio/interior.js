import React from "react"
import { graphql } from "gatsby"

import Slider from "react-slick"

// import the css files for react-slick carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default ({ data }) => {
  const seo = {
    title: "Interior Plantscape Design Portfolio | Botanicals Design",
    description:
      "See how our carefully curated interior plantscapes have transformed spaces into places that live, breathe, and engage. View our interior plantscape design portfolio to see the quality of our work and request a consultation to get started with your own.",
    imagePath: "/heros/interior-portfolio-small-1x.jpg",
    urlPath: "/portfolio/interior",
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PageLayout
      heroImage="interior-portfolio"
      ext="jpg"
      mainHeading="Interior Portfolio"
      subHeading="Breathe life into your interior surroundings"
      pageHeading="Living interiors"
      seo={seo}
    >
      <Section sectionHeading="Commercial">
        <Row>
          <Column width={100}>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.interiorCommercialOverview.edges.map((image, index) => (
                  <div
                    key={`${index}-ico`}
                    className="carousel-image-container"
                  >
                    <img
                      className="carousel-image"
                      src={image.node.secure_url}
                      alt="interior portfolio"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring Findlay Subaru
            </h3>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.interiorCommercialFindlaySubaru.edges.map(
                  (image, index) => (
                    <div
                      key={`${index}-icfs`}
                      className="carousel-image-container"
                    >
                      <img
                        className="carousel-image"
                        src={image.node.secure_url}
                        alt="interior portfolio"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring IHC Genomics
            </h3>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.interiorCommercialIHCGenomics.edges.map(
                  (image, index) => (
                    <div
                      key={`${index}-icig`}
                      className="carousel-image-container"
                    >
                      <img
                        className="carousel-image"
                        src={image.node.secure_url}
                        alt="interior portfolio"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Residential">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring St George Parade of Homes 2020
            </h3>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.interiorResidentialParadeOfHomes2020.edges.map(
                  (image, index) => (
                    <div
                      key={`${index}-irpoh2`}
                      className="carousel-image-container"
                    >
                      <img
                        className="carousel-image"
                        src={image.node.secure_url}
                        alt="interior portfolio"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    interiorCommercialOverview: allCloudinaryMedia(
      filter: { public_id: { glob: "interior/commercial/overview/*" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }

    interiorCommercialFindlaySubaru: allCloudinaryMedia(
      filter: { public_id: { glob: "interior/commercial/findlay-subaru/*" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }

    interiorCommercialIHCGenomics: allCloudinaryMedia(
      filter: { public_id: { glob: "interior/commercial/ihc-genomics/*" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }

    interiorResidentialParadeOfHomes2020: allCloudinaryMedia(
      filter: {
        public_id: { glob: "interior/residential/parade-of-homes-2020/*" }
      }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`
