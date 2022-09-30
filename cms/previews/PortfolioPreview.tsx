import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import PortfolioPage from '../../layouts/pages/PortfolioPage';

const PortfolioPreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  const hero = entry.getIn(['data', 'hero'])?.toJS();
  const commercial = entry.getIn(['data', 'commercial'])?.toJS();
  const residential = entry.getIn(['data', 'residential'])?.toJS();
  const metadata = entry.getIn(['data', 'metadata'])?.toJS();

  return (
    <PageLayout hero={hero} seo={metadata}>
      <PortfolioPage name={name} commercial={commercial} residential={residential} />
    </PageLayout>
  );
};

export default PortfolioPreview;
