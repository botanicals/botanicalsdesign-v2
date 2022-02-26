import { Section, Row, Column } from '../layouts';

import Button from '../elements/button';
import MarkdownText from '../utility/markdown-text';

type Image = {
  source: string;
  alt: string;
};

interface SeeOurPortfoliosProps {
  data: {
    type: 'seeOurPortfolios';
    heading: string;
    indoor: {
      content: string;
      images: Image[];
    };
    outdoor: {
      content: string;
      images: Image[];
    };
  };
}

const SeeOurPortfolios: React.FC<SeeOurPortfoliosProps> = ({ data }) => {
  return (
    <Section heading="See our Portfolios">
      <Row>
        <Column width={100}>
          <MarkdownText>{data.indoor.content}</MarkdownText>
          <Button href="/portfolio/interior">View Interior Portfolio</Button>
        </Column>
      </Row>
      <Row>
        {data.indoor.images.map((image, index) => (
          <Column key={index} width={33}>
            <figure>
              <img src={image.source} alt={image.alt} />
            </figure>
          </Column>
        ))}
      </Row>
      <Row>
        <Column width={100}>
          <MarkdownText>{data.outdoor.content}</MarkdownText>
          <Button href="/portfolio/exterior">View Exterior Portfolio</Button>
        </Column>
      </Row>
      <Row>
        {data.outdoor.images.map((image, index) => (
          <Column key={index} width={33}>
            <figure>
              <img src={image.source} alt={image.alt} />
            </figure>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export default SeeOurPortfolios;
