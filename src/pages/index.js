import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../layouts/PageLayout';

import Sections from '../components/sections';

const HomePage = ({ data }) => {
  // const { metadata, contentSections } = data.strapiPage
  const metadata = {};

  return (
    <PageLayout metadata={{ ...metadata, urlPath: '/' }}>
      {/* <Sections sections={contentSections} /> */}
      <p>Temporary</p>
    </PageLayout>
  );
};

export default HomePage;

// export const query = graphql`
//   query HomePageQuery {
//     strapiPage(slug: { eq: "index" }) {
//       contentSections
//       slug
//       shortName
//       metadata {
//         metaDescription
//         metaTitle
//         twitterCardType
//       }
//     }
//   }
// `
