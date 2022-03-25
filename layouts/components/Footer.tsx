import Link from 'next/link';

import { attributes as navigation } from '../../content/settings/navigation.md';

import { Section, Column, Row } from '../../components/layouts';
import { Fragment } from 'react';
import NewlineText from '../../components/utility/newline-text';

import { Navigation } from '../../utils/md-types';

const Footer = () => {
  const { footerNavigation, footerLocations } = navigation as Navigation;

  return (
    <footer className="bg-black">
      <Section>
        <Row>
          <Column width={100}>
            <img src="/assets/logos/botanicals-logo.png" className="footer__logo" alt="botanicals logo" />
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h5 heading__h5--green">{footerLocations.heading}</h3>
            <div className="grid gap-8 pb-16 mt-2 border-b border-[#1f1f1f] sm:grid-cols-2 md:grid-cols-3">
              {footerLocations.locations.map((location, index) => (
                <div key={index} className="">
                  <li className="navigation__list">
                    <Link href={location.href}>
                      <a className="navigation__links navigation__links--footer">
                        <h4 className="heading heading__h6 heading__h6--green u-hover-link">{location.name}</h4>
                      </a>
                    </Link>
                  </li>
                  <span className="u-default-font-size">
                    <NewlineText>{location.address}</NewlineText>
                    <br />
                  </span>

                  <div className="flex flex-col space-y-2">
                    <a href={location.phone.href} className="navigation__links navigation__links--footer">
                      {location.phone.text}
                    </a>

                    <Link href={location.email.href}>
                      <a className="uppercase navigation__links navigation__links--footer">{location.email.text}</a>
                    </Link>

                    <div className="flex space-x-8">
                      {location.socials.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noreferrer">
                          <img src={social.type === 'facebook' ? '/assets/icons/fb.png' : '/assets/icons/ig.png'} className="footer__icon" alt={`${location.name} ${social.type}`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Column>
        </Row>

        <Row>
          <Column width={66}>
            <h3 className="heading heading__h5 heading__h5--green">Explore our Site</h3>
            <div className="grid grid-cols-2">
              {footerNavigation.map((item, index) => (
                <div key={index}>
                  <h3 className="heading heading__h5 heading__h5--green">{item.name}</h3>
                  {item.groups.map((group, index) => (
                    <Fragment key={index}>
                      <h4 className="heading heading__h6 heading__h6--green">{group.name}</h4>
                      <ul className="navigation__list">
                        {group.children.map((child, index) => (
                          <Link key={index} href={'/' + child.path! || child.href!}>
                            <a className="navigation__links navigation__links--footer">
                              <li>{child.name}</li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </Column>

          <Column width={33}>
            <h3 className="heading heading__h5 heading__h5--green">The Botanicals Family of Businesses</h3>

            <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <a href="https://gibbyfloral.com" target="_blank" rel="noreferrer">
                  <img src="/assets/bfob/gibby-floral.png" alt="gibby floral" />
                </a>
              </div>
              <div className="border border-green-900 rounded-2xl">
                <Link href="/">
                  <a>
                    <img src="/assets/bfob/botanicals.png" alt="botanicals" />
                  </a>
                </Link>
              </div>
              <div>
                <a href="https://sandia-greenhouse.business.site" target="_blank" rel="noreferrer">
                  <img src="/assets/bfob/sandia.png" alt="sandia" />
                </a>
              </div>
            </div>
          </Column>
        </Row>

        <Row>
          <Column centered width={100}>
            <span className="footer__copywrite-span">&copy; {new Date().getFullYear()} By Botanicals. All rights reserved.</span>
          </Column>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
