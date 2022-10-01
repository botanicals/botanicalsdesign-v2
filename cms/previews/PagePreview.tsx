import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import Sections from '../../components/sections';

const PagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  const parent = entry.getIn(['data', 'parent']);
  const hero = entry.getIn(['data', 'hero'])?.toJS();
  const heading = entry.getIn(['data', 'heading']);
  const sections = entry.getIn(['data', 'sections'])?.toJS();
  const metadata = entry.getIn(['data', 'metadata'])?.toJS();

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      <Sections sections={sections || []} preview={true} />
    </PageLayout>
  );
};

export default PagePreview;
