import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Row from "../components/Row"
import Column from "../components/Column"
import Section from "../components/Section"

function Footer() {
  return (
    <footer className="footer">
      <Section>
        <Row>
          <Column width={100}>
            <img
              src="/assets/logos/botanicals-logo.png"
              className="footer__logo"
              alt="botanicals logo"
            />
          </Column>
        </Row>
        <Row>
          <Column width={50}>
            <h3 className="heading heading__h5 heading__h5--green">
              Visit Us at our Stores
            </h3>
            <li className="navigation__list">
              <Link
                to="/locations/kaysville"
                className="navigation__links navigation__links--footer"
              >
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">
                  Botanicals Kaysville
                </h4>
              </Link>
            </li>
            <p className="u-default-font-size">
              395 South Deseret Drive
              <br />
              Kaysville, UT 84037
              <br />
              <a
                href="tel:8015671255"
                className="navigation__links navigation__links--footer"
              >
                801.567.1255
              </a>
            </p>
            <Link
              to="/contact/kaysville"
              className="navigation__links navigation__links--footer"
            >
              SEND A MESSAGE
            </Link>
            <br />
            <OutboundLink
              href="https://www.facebook.com/botanicalskaysville/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/icons/fb.png"
                className="footer__icon"
                alt="botanicals kaysville facebook"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/botanicalsdesign/"
              target="_blank"
              rel="noreferrer"
              className="footer__icon--leftmargin"
            >
              <img
                src="/assets/icons/ig.png"
                className="footer__icon"
                alt="botanicals design instagram"
              />
            </OutboundLink>

            <li className="navigation__list">
              <Link
                to="/locations/sandy"
                className="navigation__links navigation__links--footer"
              >
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">
                  Botanicals Sandy
                </h4>
              </Link>
            </li>
            <p className="u-default-font-size">
              8610 South State Street
              <br />
              Sandy, UT 84070
              <br />
              <a
                href="tel:8015671255"
                className="navigation__links navigation__links--footer"
              >
                801.567.1255
              </a>
            </p>
            <Link
              to="/contact/sandy"
              className="navigation__links navigation__links--footer"
            >
              SEND A MESSAGE
            </Link>
            <br />
            <OutboundLink
              href="https://www.facebook.com/BotanicalsSandy/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/icons/fb.png"
                className="footer__icon"
                alt="botanicals sandy facebook"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/botanicalsdesign/"
              target="_blank"
              rel="noreferrer"
              className="footer__icon--leftmargin"
              alt="botanicals design instagram"
            >
              <img
                src="/assets/icons/ig.png"
                className="footer__icon"
                alt="botanicals design instagram"
              />
            </OutboundLink>

            <li className="navigation__list">
              <Link
                to="/locations/saint-george"
                className="navigation__links navigation__links--footer"
              >
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">
                  Botanicals St. George
                </h4>
              </Link>
            </li>
            <p className="u-default-font-size">
              592 North Bluff Street
              <br />
              St. George, UT 84770
              <br />
              <a
                href="tel:4356562151"
                className="navigation__links navigation__links--footer"
              >
                435.656.2151
              </a>
            </p>
            <Link
              to="/contact/saint-george"
              className="navigation__links navigation__links--footer"
            >
              SEND A MESSAGE
            </Link>
            <br />
            <OutboundLink
              href="https://www.facebook.com/botanicalsstgeorge/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/icons/fb.png"
                className="footer__icon"
                alt="botanicals saint george facebook"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/botanicalsdesign/"
              target="_blank"
              rel="noreferrer"
              className="footer__icon--leftmargin"
            >
              <img
                src="/assets/icons/ig.png"
                className="footer__icon"
                alt="botanicals design instagram"
              />
            </OutboundLink>
          </Column>
          <Column width={50}>
            <h3 className="heading heading__h5 heading__h5--green">
              Stay up to Date
            </h3>
            <h4 className="heading heading__h6 heading__h6--green">
              Explore Our Site
            </h4>
            <ul className="navigation__list">
              <Link
                to="/why-plantscape"
                className="navigation__links navigation__links--footer"
              >
                <li>Plantscapes</li>
              </Link>
              <Link
                to="/services"
                className="navigation__links navigation__links--footer"
              >
                <li>Services</li>
              </Link>
              <Link
                to="/prospective-clients"
                className="navigation__links navigation__links--footer"
              >
                <li>Prospective Clients</li>
              </Link>
              <Link
                to="/portfolio"
                className="navigation__links navigation__links--footer"
              >
                <li>Portfolio</li>
              </Link>
              <Link
                to="/locations"
                className="navigation__links navigation__links--footer"
              >
                <li>Locations</li>
              </Link>
            </ul>
            <h4 className="heading heading__h6 heading__h6--green">
              Learn More
            </h4>
            <ul className="navigation__list navigation__list--footer">
              <Link
                to="/blog"
                className="navigation__links navigation__links--footer"
              >
                <li>Blog </li>
              </Link>

              <Link
                to="/about"
                className="navigation__links navigation__links--footer"
              >
                <li>About </li>
              </Link>

              {/*
                <Link
                  to="/events"
                  className="navigation__links navigation__links--footer"
                > <li>
                  Botanicals Events  </li>
                </Link>
             */}

              <Link
                to="/jobs"
                className="navigation__links navigation__links--footer"
              >
                <li>Job Openings</li>
              </Link>
            </ul>
            <h3 className="heading heading__h5 heading__h5--green">
              Work with Us
            </h3>

            <h4 className="heading heading__h6 heading__h6--green">
              Design Professionals
            </h4>
            <ul className="navigation__list">
              <Link
                to="/prospective-clients#landscapers"
                className="navigation__links navigation__links--footer"
              >
                <li>Landscapers</li>
              </Link>
              <Link
                to="/prospective-clients#architects"
                className="navigation__links navigation__links--footer"
              >
                <li>Architects</li>
              </Link>
              <Link
                to="/prospective-clients#interior-designers"
                className="navigation__links navigation__links--footer"
              >
                <li>Interior Designers</li>
              </Link>
            </ul>
            <h4 className="heading heading__h6 heading__h6--green">
              Plantscape Designs
            </h4>
            <ul className="navigation__list">
              <Link
                to="/prospective-clients#residential"
                className="navigation__links navigation__links--footer"
              >
                <li>Residential Spaces</li>
              </Link>
              <Link
                to="/prospective-clients#commercial"
                className="navigation__links navigation__links--footer"
              >
                <li>Commercial Spaces</li>
              </Link>
            </ul>

            <h4 className="heading heading__h6 heading__h6--green">
              Get a Free Consultation
            </h4>
            <ul className="navigation__list">
              <Link
                to="/request-consultation"
                className="navigation__links navigation__links--footer"
              >
                <li>Request a Consultation</li>
              </Link>
            </ul>
          </Column>
        </Row>

        <Row>
          <Column centered width={100}>
            <span className="footer__copywrite-span">
              &copy; 2021 BY BOTANICALS
              {/* <OutboundLink
                href="http://talondurrant.com"
                target="_blank"
                className="footer__copywrite-link"
                rel="noreferrer"
              >
                TALON DURRANT
              </OutboundLink> */}
            </span>
          </Column>
        </Row>
      </Section>

      {/* <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-117112939-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-117112939-1');
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-157803642-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-157803642-1');
</script> */}
    </footer>
  )
}

export default Footer
