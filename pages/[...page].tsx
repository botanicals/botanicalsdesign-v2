import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';
import { HeroProps } from '../layouts/components/Hero';

import Sections from '../components/sections';

import { getParent } from '../utils/split-data';

interface PageProps {
  name: string;
  heading: string;
  hero: HeroProps;
  metadata: Metadata;
  sections: any[];
}

interface SiteMap {
  parent: string;
  children?: { child: string }[];
}

interface PagePaths {
  params: {
    page: string[];
  };
}

const Page: NextPage<PageProps> = ({ name, heading, hero, metadata, sections }) => {
  // Check if the required data was provided
  if (!sections) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      <Sections sections={sections} />
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    attributes: { paths: siteMap },
  } = await import('../cms/content/settings/paths.md');

  let paths: PagePaths[] = [];

  siteMap.forEach(({ parent, children }: SiteMap) => {
    if (parent === 'jobs') return;

    let newPaths: PagePaths[];
    let childPaths: PagePaths[] = [];

    if (children?.length) {
      childPaths = children.map(({ child }) => ({
        params: {
          page: [parent, child],
        },
      }));
    }

    newPaths = [
      {
        params: {
          page: [parent],
        },
      },
    ];

    paths = [...paths, ...newPaths, ...childPaths];
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { page } = context.params!;

  if (!page || typeof page === 'string') {
    return { props: {} };
  }

  const [slug] = page.slice(-1);

  const pageData = await import(`../cms/content/pages/${slug}.md`).catch(error => null);

  const { name, heading, hero, parent, metadata, sections = [] } = pageData.attributes;

  return {
    props: {
      name,
      heading,
      hero,
      metadata: {
        ...metadata,
        parent: parent ? getParent(parent) : null,
      },
      sections,
    },
  };
};

export default Page;
