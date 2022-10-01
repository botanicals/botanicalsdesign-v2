import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import LocationPageLayout from '../../layouts/pages/LocationPage';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

interface LocationPageProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
  sections: any;
}

const LocationPage: NextPage<LocationPageProps> = ({ name, hero, metadata, sections }) => {
  // Check if the required data was provided
  if (!sections.about || !sections.visit) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout hero={hero} seo={metadata}>
      <LocationPageLayout sections={sections} />
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../cms/content/locations', true, /\.md$/));

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
  const { location } = context.params!;

  const pageData = await import(`../../cms/content/locations/${location}.md`).catch(error => null);

  if (!pageData) {
    return { props: {} };
  }

  const { name, hero, aboutUs, visitUs, additionalContent, gallery, botanicalsInsider, metadata } = pageData.attributes;

  return {
    props: {
      name,
      hero,
      metadata,
      sections: {
        about: aboutUs,
        visit: visitUs,
        additional: additionalContent || null,
        gallery,
        insider: botanicalsInsider,
      },
    },
  };
};

export default LocationPage;
