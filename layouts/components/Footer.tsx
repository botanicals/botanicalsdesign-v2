// import Link from 'next/link';

import { attributes as navigation } from '../../content/settings/navigation.md';

import { Section, Column, Row } from '../../components/layouts';

const Footer = () => {
  const { footerNavigation } = navigation;

  return (
    <footer className="footer">
      <Section>
        <Row>
          <Column width={100}>
            <img src="/assets/logos/botanicals-logo.png" className="footer__logo" alt="botanicals logo" />
          </Column>
        </Row>
        <Row>
          <Column width={50}>
            <h3 className="heading heading__h5 heading__h5--green">Visit Us at our Stores</h3>
            <li className="navigation__list">
              <a href="/locations/kaysville" className="navigation__links navigation__links--footer">
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">Botanicals Kaysville</h4>
              </a>
            </li>
            <p className="u-default-font-size">
              395 South Deseret Drive
              <br />
              Kaysville, UT 84037
              <br />
              <a href="tel:8015892055" className="navigation__links navigation__links--footer">
                801.589.2055
              </a>
            </p>
            <a href="/contact/kaysville" className="navigation__links navigation__links--footer">
              SEND A MESSAGE
            </a>
            <br />
            <a href="https://www.facebook.com/botanicalskaysville/" target="_blank" rel="noreferrer">
              <img src="/assets/icons/fb.png" className="footer__icon" alt="botanicals kaysville facebook" />
            </a>
            <a href="https://www.instagram.com/botanicalsdesign/" target="_blank" rel="noreferrer" className="footer__icon--leftmargin">
              <img src="/assets/icons/ig.png" className="footer__icon" alt="botanicals design instagram" />
            </a>

            <li className="navigation__list">
              <a href="/locations/sandy" className="navigation__links navigation__links--footer">
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">Botanicals Sandy</h4>
              </a>
            </li>
            <p className="u-default-font-size">
              8610 South State Street
              <br />
              Sandy, UT 84070
              <br />
              <a href="tel:8015671255" className="navigation__links navigation__links--footer">
                801.567.1255
              </a>
            </p>
            <a href="/contact/sandy" className="navigation__links navigation__links--footer">
              SEND A MESSAGE
            </a>
            <br />
            <a href="https://www.facebook.com/BotanicalsSandy/" target="_blank" rel="noreferrer">
              <img src="/assets/icons/fb.png" className="footer__icon" alt="botanicals sandy facebook" />
            </a>
            <a href="https://www.instagram.com/botanicalsdesign/" target="_blank" rel="noreferrer" className="footer__icon--leftmargin">
              <img src="/assets/icons/ig.png" className="footer__icon" alt="botanicals design instagram" />
            </a>

            <li className="navigation__list">
              <a href="/locations/saint-george" className="navigation__links navigation__links--footer">
                <h4 className="heading heading__h6 heading__h6--green u-hover-link">Botanicals St. George</h4>
              </a>
            </li>
            <p className="u-default-font-size">
              592 North Bluff Street
              <br />
              St. George, UT 84770
              <br />
              <a href="tel:4356562151" className="navigation__links navigation__links--footer">
                435.656.2151
              </a>
            </p>
            <a href="/contact/saint-george" className="navigation__links navigation__links--footer">
              SEND A MESSAGE
            </a>
            <br />
            <a href="https://www.facebook.com/botanicalsstgeorge/" target="_blank" rel="noreferrer">
              <img src="/assets/icons/fb.png" className="footer__icon" alt="botanicals saint george facebook" />
            </a>
            <a href="https://www.instagram.com/botanicalsdesign/" target="_blank" rel="noreferrer" className="footer__icon--leftmargin">
              <img src="/assets/icons/ig.png" className="footer__icon" alt="botanicals design instagram" />
            </a>
          </Column>
          <Column width={50}>
            <h3 className="heading heading__h5 heading__h5--green">Stay up to Date</h3>
            <h4 className="heading heading__h6 heading__h6--green">Explore Our Site</h4>
            <ul className="navigation__list">
              <a href="/why-plantscape" className="navigation__links navigation__links--footer">
                <li>Plantscapes</li>
              </a>
              <a href="/services" className="navigation__links navigation__links--footer">
                <li>Services</li>
              </a>
              <a href="/prospective-clients" className="navigation__links navigation__links--footer">
                <li>Prospective Clients</li>
              </a>
              <a href="/portfolio" className="navigation__links navigation__links--footer">
                <li>Portfolio</li>
              </a>
              <a href="/locations" className="navigation__links navigation__links--footer">
                <li>Locations</li>
              </a>
            </ul>
            <h4 className="heading heading__h6 heading__h6--green">Learn More</h4>
            <ul className="navigation__list navigation__list--footer">
              <a href="/blog" className="navigation__links navigation__links--footer">
                <li>Blog </li>
              </a>

              <a href="/about" className="navigation__links navigation__links--footer">
                <li>About </li>
              </a>

              {/*
              <a
                href="/events"
                className="navigation__links navigation__links--footer"
              > <li>
                Botanicals Events  </li>
              </a>
           */}

              <a href="/jobs" className="navigation__links navigation__links--footer">
                <li>Job Openings</li>
              </a>
            </ul>
            <h3 className="heading heading__h5 heading__h5--green">Work with Us</h3>

            <h4 className="heading heading__h6 heading__h6--green">Design Professionals</h4>
            <ul className="navigation__list">
              <a href="/prospective-clients#landscapers" className="navigation__links navigation__links--footer">
                <li>Landscapers</li>
              </a>
              <a href="/prospective-clients#architects" className="navigation__links navigation__links--footer">
                <li>Architects</li>
              </a>
              <a href="/prospective-clients#interior-designers" className="navigation__links navigation__links--footer">
                <li>Interior Designers</li>
              </a>
            </ul>
            <h4 className="heading heading__h6 heading__h6--green">Plantscape Designs</h4>
            <ul className="navigation__list">
              <a href="/prospective-clients#residential" className="navigation__links navigation__links--footer">
                <li>Residential Spaces</li>
              </a>
              <a href="/prospective-clients#commercial" className="navigation__links navigation__links--footer">
                <li>Commercial Spaces</li>
              </a>
            </ul>

            <h4 className="heading heading__h6 heading__h6--green">Get a Free Consultation</h4>
            <ul className="navigation__list">
              <a href="/request-consultation" className="navigation__links navigation__links--footer">
                <li>Request a Consultation</li>
              </a>
            </ul>
          </Column>
        </Row>

        <Row>
          <Column centered width={100}>
            <span className="footer__copywrite-span">
              &copy; 2021 BY BOTANICALS
              {/* <a
              href="http://talondurrant.com"
              target="_blank"
              className="footer__copywrite-link"
              rel="noreferrer"
            >
              TALON DURRANT
            </a> */}
            </span>
          </Column>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
