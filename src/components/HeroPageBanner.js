import React from "react"
import { Link } from "gatsby"

function HeroPageBanner(props) {
  return (
    <>
      <div
        className={`hero-image-container ${
          props.altImage ? "hero-image-container--alt" : ""
        }`}
        style={{ backgroundImage: `url(${props.altImage})` }}
      >
        {props.heroImage && !props.altImage ? (
          <picture>
            {/* up to 500px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="500px"
              media="(max-width: 500px)"
              srcSet={`/heroes/${props.heroImage}-small-1x.${props.ext} 500w, /heroes/${props.heroImage}-small-2x.${props.ext} 1000w,`}
            />
            {/* up to 800px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="800px"
              media="(max-width: 800px)"
              srcSet={`/heroes/${props.heroImage}-ms-1x.${props.ext} 800w, /heroes/${props.heroImage}-ms-2x.${props.ext} 1600w,`}
            />
            {/* up to 1000px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1000px"
              media="(max-width: 1000px)"
              srcSet={`/heroes/${props.heroImage}-medium-1x.${props.ext} 1000w, /heroes/${props.heroImage}-medium-2x.${props.ext} 2000w,`}
            />
            {/* up to 1400px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1400px"
              media="(max-width: 1400px)"
              srcSet={`/heroes/${props.heroImage}-ml-1x.${props.ext} 1400w, /heroes/${props.heroImage}-ml-2x.${props.ext} 2800w,`}
            />
            {/* up to 1600px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1600px"
              media="(min-width: 1001px)"
              srcSet={`/heroes/${props.heroImage}-large-1x.${props.ext} 1600w, /heroes/${props.heroImage}-large-2x.${props.ext} 3200w,`}
            />

            <img
              className="hero-image-container__image"
              src={`/heroes/${props.heroImage}-large-1x.${props.ext}`}
              alt="botanicals design page hero"
            />
          </picture>
        ) : props.altImage ? null : (
          <img
            className="hero-image-container__image"
            src={`/heroes/PLACEHOLDER.jpg`}
            alt="botanicals design page hero"
          />
        )}
        <div>
          <div className="hero-image-container__page-banner">
            <div
              className={`page-banner__container ${
                props.altBanner ? "page-banner__container--alt" : ""
              }`}
            >
              <h1 className="page-banner__main-heading">{props.mainHeading}</h1>
              {props.link ? (
                <Link to={props.link}>
                  <h2
                    className={`page-banner__sub-heading ${
                      props.altBanner ? "page-banner__sub-heading--alt" : ""
                    }`}
                  >
                    {props.subHeading}
                  </h2>
                </Link>
              ) : (
                <h2
                  className={`page-banner__sub-heading ${
                    props.altBanner ? "page-banner__sub-heading--alt" : ""
                  }`}
                >
                  {props.subHeading}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroPageBanner
