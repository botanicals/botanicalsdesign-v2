import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <div className="max-w-7xl bg-white mx-auto py-8">
      <Link to="/">
        <StaticImage
          src="../../images/gibbyfloral-banner.jpg"
          alt="gibby floral banner"
          layout="fullWidth"
          placeholder="blurred"
        />
      </Link>
    </div>
  )
}

export default Header
