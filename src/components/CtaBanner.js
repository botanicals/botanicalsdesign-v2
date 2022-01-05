import React from "react"
import { Link } from "gatsby"

const CtaBanner = ({ data }) => {
  return (
    <div className="cta-banner">
      <div className="cta-banner-container">
        <p className="cta-banner-container__text">
          <span className="cta-banner-container__text--heading">
            {data.heading}
          </span>{" "}
          {data.text}
        </p>
        <Link to={data.buttonHref}>
          <button className="cta-banner-container__button">
            {data.buttonText}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CtaBanner
