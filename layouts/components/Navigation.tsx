import Link from 'next/link';
import { useState } from 'react';

function Navigation() {
  const [navListVisible, setNavListVisible] = useState(false);

  function hamburgerClick() {
    setNavListVisible(true);
    //document.body.style.overflow = "hidden"
  }

  function closeClick() {
    setNavListVisible(false);
    //document.body.style.overflow = "unset"
  }

  return (
    <nav className="navigation">
      <button onClick={hamburgerClick} id="hamburger">
        <span>
          <i>&#9776;</i>
        </span>
      </button>
      <ul className={`navigation__list ${!navListVisible && 'hidden'}`}>
        <li>
          <button onClick={closeClick} id="close">
            <span>
              <i>&#10005;</i>
            </span>
          </button>
        </li>
        <li>
          <Link href="/why-plantscape">
            <a className="navigation__links">Why Plantscape?</a>
          </Link>
        </li>
        <li className="parent-nav">
          <Link href="/services">
            <a className="navigation__links">Services &#9662;</a>
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link href="/services/design">
                <a className="navigation__links">Design</a>
              </Link>
            </li>
            <li>
              <Link href="/services/maintenance">
                <a className="navigation__links">Maintenance</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link href="/prospective-clients">
            <a className="navigation__links">Prospective Clients &#9662;</a>
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link href="/request-consultation">
                <a className="navigation__links">Request Consultation</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link href="/portfolio">
            <a className="navigation__links">Portfolios &#9662;</a>
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link href="/portfolio/interior">
                <a className="navigation__links">Interior</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio/exterior">
                <a className="navigation__links">Exterior</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link href="/locations">
            <a className="navigation__links">Locations &#9662;</a>
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link href="/locations/kaysville">
                <a className="navigation__links">Kaysville, UT</a>
              </Link>
            </li>
            <li>
              <Link href="/locations/sandy">
                <a className="navigation__links">Sandy, UT</a>
              </Link>
            </li>
            <li>
              <Link href="/locations/saint-george">
                <a className="navigation__links">St George, UT</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog">
            <a className="navigation__links">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="navigation__links">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
