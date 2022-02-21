import Link from 'next/link';

export interface HeroProps {
  heading: string;
  subheading: string;
  image: {
    name: string;
    ext: string;
  };
  cta?: {
    heading?: string;
    text?: string;
    button?: {
      text?: string;
      href?: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ heading, subheading, image, cta }) => {
  return (
    <>
      <div className={`hero-image-container`}>
        {image ? (
          <picture>
            {/* up to 500px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="500px"
              media="(max-width: 500px)"
              srcSet={`/heroes/${image.name}-small-1x.${image.ext} 500w, /heroes/${image.name}-small-2x.${image.ext} 1000w,`}
            />
            {/* up to 800px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="800px"
              media="(max-width: 800px)"
              srcSet={`/heroes/${image.name}-ms-1x.${image.ext} 800w, /heroes/${image.name}-ms-2x.${image.ext} 1600w,`}
            />
            {/* up to 1000px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1000px"
              media="(max-width: 1000px)"
              srcSet={`/heroes/${image.name}-medium-1x.${image.ext} 1000w, /heroes/${image.name}-medium-2x.${image.ext} 2000w,`}
            />
            {/* up to 1400px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1400px"
              media="(max-width: 1400px)"
              srcSet={`/heroes/${image.name}-ml-1x.${image.ext} 1400w, /heroes/${image.name}-ml-2x.${image.ext} 2800w,`}
            />
            {/* up to 1600px wide screens */}
            <source
              className="hero-image-container__image"
              sizes="1600px"
              media="(min-width: 1001px)"
              srcSet={`/heroes/${image.name}-large-1x.${image.ext} 1600w, /heroes/${image.name}-large-2x.${image.ext} 3200w,`}
            />

            <img className="hero-image-container__image" src={`/heroes/${image.name}-large-1x.${image.ext}`} alt="botanicals design page hero" />
          </picture>
        ) : (
          <img className="hero-image-container__image" src={`/heroes/PLACEHOLDER.jpg`} alt="botanicals design page hero" />
        )}

        <div>
          <div className="hero-image-container__page-banner">
            <div className={`page-banner__container`}>
              <h1 className="page-banner__main-heading">{heading}</h1>
              <h2 className={`page-banner__sub-heading`}>{subheading}</h2>
            </div>
          </div>
        </div>
      </div>

      {(cta?.heading || cta?.text) && (
        <div className="cta-banner">
          <div className="cta-banner-container">
            <p className="cta-banner-container__text">
              <span className="cta-banner-container__text--heading">{cta.heading}</span> {cta.text}
            </p>
            {cta.button?.href && cta.button?.text && (
              <Link href={cta.button.href}>
                <a>
                  <button className="cta-banner-container__button">{cta.button.text}</button>
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
