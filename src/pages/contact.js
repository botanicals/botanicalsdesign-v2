import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../layouts/PageLayout';

import Sections from '../components/sections';

const ContactPage = ({ data }) => {
  // const { metadata, slug, contentSections } = data.strapiPage
  const metadata = {};
  return (
    <PageLayout metadata={{ ...metadata, urlPath: `/contact` }}>
      {/* <Sections sections={contentSections} /> */}
      <p>Temporary</p>
    </PageLayout>
  );
};

export default ContactPage;

// export const query = graphql`
//   query ContactPageQuery {
//     strapiPage(slug: { eq: "contact" }) {
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
