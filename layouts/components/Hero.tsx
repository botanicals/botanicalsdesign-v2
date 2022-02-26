import Link from 'next/link';

export interface HeroProps {
  heading: string;
  subheading: string;
  image: {
    source: string;
    alt: string;
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
      <div className={`hero-image-container`} style={{ backgroundImage: `url(${image.source})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
