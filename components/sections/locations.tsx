import Link from 'next/link';

import { Row, Column, Section } from '../layouts';

import Picture from '../elements/picture';
import Button from '../elements/button';

interface LocationsSectionProps {
  data: {
    type: 'locations';
  };
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ data }) => {
  return (
    <Section heading="Bring life to your space">
      <Row>
        <Column width={100}>
          <p>
            At Botanicals’ retail locations you can find a range of pottery, planters, garden accessories and plant-themed décor for your home and outdoor spaces. We have a lot to discover in our St.
            George and Sandy locations. Come visit us for expert advise in the design your own indoor or outdoor plantscapes or browse our selection of botanical-themed gifts and décor.
          </p>
          <h3 className="heading heading__h3 heading__h3--green">Visit our Retail Locations</h3>

          <p>
            We are always looking to expand our ability to help people enrich their lives. This is why we have{' '}
            <Link href="/locations">
              <a>three retail locations</a>
            </Link>
            . Visit us at these locations to find beautiful ceramic pottery, metal art, yard decor, plants, and more.{' '}
          </p>

          <p>
            If you are looking to liven up your home or yard then retail locations will provide you with the tool necessary to do that. Our staff are always happy to answer any questions to help with
            your designing. We have a lot to offer, and provide a delivery service for those who want it.
          </p>
        </Column>
      </Row>
      <Row>
        <Column width={33}>
          <Picture column={33} page="locations_comp" imageName="botanicals-kaysville-retail-location" ext="jpg" alt="Botanicals Kaysville retail location" caption="" />
          <Button href="/locations/kaysville">Botanicals Kaysville</Button>
        </Column>
        <Column width={33}>
          <Picture column={33} page="locations_comp" imageName="botanicals-sandy-retail-location" ext="jpg" alt="Botanicals Sandy retail location" caption="" />
          <Button href="/locations/sandy">Botanicals Sandy</Button>
        </Column>
        <Column width={33}>
          <Picture column={33} page="locations_comp" imageName="botanicals-st-george-retail-location" ext="jpg" alt="Botanicals St George retail location" caption="" />
          <Button href="/locations/saint-george">Botanicals St George</Button>
        </Column>
      </Row>
    </Section>
  );
};

export default LocationsSection;
