import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';

import PageLayout from '../../layouts/PageLayout';
import JobPageLayout from '../../layouts/pages/JobPage';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

export interface Listing {
  title: string;
  description: string;
}

interface JobsPageProps {
  name: string;
  heading: string;
  overview: string;
  hero: HeroProps;
  metadata: Metadata;
  positions: Listing[];
}

const JobsPage: NextPage<JobsPageProps> = ({ name, heading, hero, metadata, overview, positions }) => {
  // Check if the required data was provided
  if (!positions) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      <JobPageLayout name={name} overview={overview} positions={positions} />
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../cms/content/jobs', true, /\.md$/));

  const paths = slugs.map(slug => ({
    params: {
      location: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const page = await import('../../cms/content/pages/jobs.md').catch(error => null);

  if (!page) return { props: {} };

  const { heading, hero } = page.attributes;

  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../cms/content/jobs', true, /\.md$/));

  const locations = await Promise.all(
    slugs.map(async slug => {
      const location = await import(`../../cms/content/jobs/${slug}.md`).catch(error => null);
      return { ...location.attributes };
    })
  );

  const { location } = context.params!;

  const { name, metadata, overview, positions } = locations.find(locat => locat.metadata.slug === location);

  return {
    props: {
      name,
      heading,
      hero,
      metadata,
      overview,
      positions,
    },
  };
};

export default JobsPage;
