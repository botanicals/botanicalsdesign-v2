import { NextPage } from 'next';
import ErrorPage from 'next/error';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';
import { HeroProps } from '../layouts/components/Hero';

import Sections from '../components/sections';

interface IndexPageProps {
  name: string;
  heading: string;
  hero: HeroProps;
  metadata: Metadata;
  sections: any[];
}

const IndexPage: NextPage<IndexPageProps> = ({ name, heading, hero, metadata, sections }) => {
  // Check if the required data was provided
  if (!sections?.length) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      <Sections sections={sections} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/index.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, heading, hero, metadata, sections = [] } = page.attributes;

  return {
    props: {
      name,
      heading,
      hero,
      metadata,
      sections,
    },
  };
}

export default IndexPage;
