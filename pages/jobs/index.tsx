import { NextPage } from 'next';
import ErrorPage from 'next/error';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

import Button from '../../components/elements/button';
import { Section, Row, Column } from '../../components/layouts';
import MarkdownText from '../../components/utility/markdown-text';

interface Listing {
  title: string;
  description: string;
}

interface Location {
  name: string;
  overview: string;
  positions: Listing[];
  metadata: Metadata;
}

interface JobsPageProps {
  name: string;
  heading: string;
  hero: HeroProps;
  metadata: Metadata;
  locations: Location[];
}

const JobsPage: NextPage<JobsPageProps> = ({ name, heading, hero, metadata, locations }) => {
  // Check if the required data was provided
  if (!locations) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      {locations.map(location => (
        <Section key={location.name} heading={location.name}>
          <Row>
            <Column width={100}>
              <p>
                Botanicals {location.name} is currently hiring for {location.positions.length} positions.
              </p>
              <Button href={'/jobs/' + location.metadata.slug}>View positions</Button>
            </Column>
          </Row>
        </Section>
      ))}
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../../content/pages/jobs.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, heading, hero, metadata } = page.attributes;

  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../content/jobs', true, /\.md$/));

  const locations = await Promise.all(
    slugs.map(async slug => {
      const location = await import(`../../content/jobs/${slug}.md`).catch(error => null);
      return { ...location.attributes, content: location.body };
    })
  );

  return {
    props: {
      name,
      heading,
      hero,
      metadata,
      locations,
    },
  };
}

export default JobsPage;
