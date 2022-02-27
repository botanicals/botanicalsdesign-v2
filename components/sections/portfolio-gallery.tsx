import { Section, Row, Column } from '../layouts';

type Image = {
  source: string;
  alt: string;
  caption?: string;
};

interface PortfolioGalleryProps {
  data: {
    type: 'portfolioGallery';
    commercial: {
      heading: string;
      images: Image[];
    };
    residential: {
      heading: string;
      images: Image[];
    };
  };
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        {data.owners.map((owner, index) => (
          <Column key={index} width={33}>
            <h3 className="heading heading__h3 heading__h3--green">{owner.name}</h3>
            <figure>
              <img src={owner.photo} alt={`Portrait of Botanicals owner ${owner.name}`} />
            </figure>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export default PortfolioGallery;
