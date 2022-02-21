import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import Sections from '../components/sections';
import { getParent } from '../utils/split-data';

interface PageProps {
  name: string;
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

const Page: React.FC<PageProps> = ({ name, parent, metadata, sections }) => {
  // Check if the required data was provided
  if (!sections) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout seo={metadata}>
      <h1 className="text-xl font-bold">{name}</h1>
      <p>Parent page: {parent && JSON.stringify(parent)}</p>
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

  console.log('PAGE', page);

  if (!page || typeof page === 'string') {
    return { props: {} };
  }

  const [slug] = page.slice(-1);

  const pageData = await import(`../content/pages/${slug}.md`).catch(error => null);

  const { name, parent, metadata, sections = [] } = pageData.attributes;

  return {
    props: {
      name,
      metadata,
      parent: parent ? getParent(parent) : undefined,
      sections,
    },
  };
};

export default Page;
