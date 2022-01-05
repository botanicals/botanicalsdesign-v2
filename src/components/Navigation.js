import React from "react"
import { Link } from "gatsby"
import { useState } from "react"

function Navigation() {
  const [navListVisible, setNavListVisible] = useState(false)

  function hamburgerClick() {
    setNavListVisible(true)
    //document.body.style.overflow = "hidden"
  }

  function closeClick() {
    setNavListVisible(false)
    //document.body.style.overflow = "unset"
  }

  return (
    <nav className="navigation">
      <button onClick={hamburgerClick} id="hamburger">
        <span>
          <i>&#9776;</i>
        </span>
      </button>
      <ul className={`navigation__list ${!navListVisible && "hidden"}`}>
        <li>
          <button onClick={closeClick} id="close">
            <span>
              <i>&#10005;</i>
            </span>
          </button>
        </li>
        <li>
          <Link to="/why-plantscape" className="navigation__links">
            Why Plantscape?
          </Link>
        </li>
        <li className="parent-nav">
          <Link to="/services" className="navigation__links">
            Services &#9662;
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link to="/services/design" className="navigation__links">
                Design
              </Link>
            </li>
            <li>
              <Link to="/services/maintenance" className="navigation__links">
                Maintenance
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link to="/prospective-clients" className="navigation__links">
            Prospective Clients &#9662;
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link to="/request-consultation" className="navigation__links">
                Request Consultation
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link to="/portfolio" className="navigation__links">
            Portfolios &#9662;
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link to="/portfolio/interior" className="navigation__links">
                Interior
              </Link>
            </li>
            <li>
              <Link to="/portfolio/exterior" className="navigation__links">
                Exterior
              </Link>
            </li>
          </ul>
        </li>
        <li className="parent-nav">
          <Link to="/locations" className="navigation__links">
            Locations &#9662;
          </Link>
          <ul className="navigation__list navigation__list--secondary">
            <li>
              <Link to="/locations/kaysville" className="navigation__links">
                Kaysville, UT
              </Link>
            </li>
            <li>
              <Link to="/locations/sandy" className="navigation__links">
                Sandy, UT
              </Link>
            </li>
            <li>
              <Link to="/locations/saint-george" className="navigation__links">
                St George, UT
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog" className="navigation__links">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className="navigation__links">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
