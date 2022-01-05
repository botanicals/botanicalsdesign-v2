import React from "react"
import { Link } from "gatsby"

import Navigation from "./Navigation"

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo header__logo--desktop">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </Link>
        <Link to="/" className="header__logo header__logo--mobile">
          <img
            className="header__logo--mobile-image"
            src="/assets/logos/botanicals-logo-mobile.png"
            alt="botanicals logo"
          />
        </Link>
        <Navigation />
      </header>
    </>
  )
}

export default Header
