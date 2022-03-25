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
      <div>
        <MarkdownText>{data.content}</MarkdownText>
      </div>

      <div className="grid mt-4 md:grid-cols-3 gap-x-8">
        <div>
          <figure>
            <img src={data.images.kaysville} alt="A collection of pottery at Botanicals Kaysville retail location" />
          </figure>
          <Button href="/locations/kaysville">Botanicals Kaysville</Button>
        </div>

        <div>
          <figure>
            <img src={data.images.sandy} alt="A collection of pottery at Botanicals Sandy retail location" />
          </figure>
          <Button href="/locations/sandy">Botanicals Sandy</Button>
        </div>

        <div>
          <figure>
            <img src={data.images.stGeorge} alt="A collection of pottery at Botanicals St George retail location" />
          </figure>
          <Button href="/locations/saint-george">Botanicals St George</Button>
        </div>
      </div>
    </Section>
  );
};

export default VisitOurLocations;
