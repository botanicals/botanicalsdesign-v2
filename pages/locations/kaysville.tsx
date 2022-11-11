import { GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';
import Image from 'next/image';
import { Column, Row, Section } from '../../components/layouts';
import Button from '../../components/elements/button';

interface LocationPageProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
}

const LocationPage: NextPage<LocationPageProps> = ({ name, hero, metadata }) => {
  return (
    <PageLayout hero={hero} seo={metadata}>
      <Section>
        <Row>
          <Column width={50}>
            <figure className="flex justify-center p-16 bg-gray-100 rounded-sm">
              <Image src="/assets/kaysville_location_closed.jpg" width="427" height="640" alt="kaysville location closed" className="rounded-sm" />
            </figure>
          </Column>
          <Column width={50}>
            <h3 className="heading heading__h3 heading__h3--green">This location is closed</h3>
            <p>
              If you need pottery or design services, please contact us at <a href="tel:8015671255">801.567.1255</a> or come and see up at our location in Sandy.
            </p>
            <Button href="/locations/sandy">Go to Botanicals Sandy</Button>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'Botanicals Kaysville',
      hero: {
        heading: 'Botanicals Kaysville',
        image: {
          source: '/uploads/kaysville-large-2x.jpg',
          alt: 'an orange-gloved hand holding a container planted with red and yellow flowers',
        },
      },
      metadata: {
        title: 'Botanicals Garden Center in Kaysville, UT',
        description: 'This location is closed.  If you need pottery or design services, please contact us at 801.567.1255 or come and see up at our location in Sandy.',
      },
    },
  };
};

export default LocationPage;
