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
  parent?: {
    title: string;
    slug: string;
  };
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

const Page: NextPage<PageProps> = ({ name, heading, hero, parent, metadata, sections }) => {
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
  } = await import('../content/settings/paths.md');

  let paths: PagePaths[] = [];

  siteMap.forEach(({ parent, children }: SiteMap) => {
    let newPaths: PagePaths[];

    if (children?.length) {
      newPaths = children.map(({ child }) => ({
        params: {
          page: [parent, child],
        },
      }));
    } else {
      newPaths = [
        {
          params: {
            page: [parent],
          },
        },
      ];
    }

    paths = [...paths, ...newPaths];
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

  const pageData = await import(`../content/pages/${slug}.md`).catch(error => null);

  const { name, heading, hero, parent, metadata, sections = [] } = pageData.attributes;

  return {
    props: {
      name,
      heading,
      hero,
      metadata,
      parent: parent ? getParent(parent) : null,
      sections,
    },
  };
};

export default Page;
