import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import JobPage from '../../layouts/pages/JobPage';

import { attributes as jobData } from '../../cms/content/pages/blog.md';

const JobPreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  const overview = entry.getIn(['data', 'overview']);
  const positions = entry.getIn(['data', 'positions'])?.toJS();
  const metadata = entry.getIn(['data', 'metadata'])?.toJS();

  return (
    <PageLayout heading={jobData.heading} hero={jobData.hero} seo={metadata}>
      <JobPage name={name} overview={overview} positions={positions} />
    </PageLayout>
  );
};

export default JobPreview;
