import { Row, Column, Section } from '../layouts';

import Button from '../elements/button';
import MarkdownText from '../utility/markdown-text';

interface VisitOurLocationsProps {
  data: {
    type: 'visitOurLocations';
    heading: string;
    content: string;
    images: {
      kaysville: string;
      sandy: string;
      stGeorge: string;
    };
  };
}

const VisitOurLocations: React.FC<VisitOurLocationsProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={100}>
          <MarkdownText>{data.content}</MarkdownText>
        </Column>
      </Row>
      <Row>
        <Column width={33}>
          <figure>
            <img src={data.images.kaysville} alt="A collection of pottery at Botanicals Kaysville retail location" />
          </figure>
          <Button href="/locations/kaysville">Botanicals Kaysville</Button>
        </Column>

        <Column width={33}>
          <figure>
            <img src={data.images.sandy} alt="A collection of pottery at Botanicals Sandy retail location" />
          </figure>
          <Button href="/locations/sandy">Botanicals Sandy</Button>
        </Column>
        <Column width={33}>
          <figure>
            <img src={data.images.stGeorge} alt="A collection of pottery at Botanicals St George retail location" />
          </figure>
          <Button href="/locations/saint-george">Botanicals St George</Button>
        </Column>
      </Row>
    </Section>
  );
};

export default VisitOurLocations;
