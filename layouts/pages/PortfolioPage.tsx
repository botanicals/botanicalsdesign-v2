import { Section, Row, Column } from '../../components/layouts';

import { PortfolioSection } from '../../pages/portfolio/[portfolio]';

interface PortfolioPageProps {
  name: string;
  commercial: PortfolioSection[];
  residential: PortfolioSection[];
}

const PortfolioPage: React.VFC<PortfolioPageProps> = ({ name, commercial, residential }) => {
  return (
    <>
      <Section heading="Commercial">
        {commercial.map(({ images, heading }, index) => (
          <Row key={index}>
            <Column width={100}>
              <h3 className="heading heading__h3 heading__h3--red">{heading}</h3>
              <div className="space-y-8">
                {images.map((image, index) => (
                  <figure key={index}>
                    <img src={image.source} alt={image.alt || `${name} portfolio - Commercial - ${heading} - ${index}`} />
                  </figure>
                ))}
              </div>
            </Column>
          </Row>
        ))}
      </Section>

      <Section heading="Residential">
        {residential.map(({ images, heading }, index) => (
          <Row key={index}>
            <Column width={100}>
              <h3 className="heading heading__h3 heading__h3--red">{heading}</h3>
              <div className="space-y-8">
                {images.map((image, index) => (
                  <figure key={index}>
                    <img src={image.source} alt={image.alt || `${name} portfolio - Residential - ${heading} - ${index}`} />
                  </figure>
                ))}
              </div>
            </Column>
          </Row>
        ))}
      </Section>
    </>
  );
};

export default PortfolioPage;
