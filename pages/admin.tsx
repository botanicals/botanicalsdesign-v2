import dynamic from 'next/dynamic';
import { InitOptions } from 'netlify-cms-core';

import config from '../cms/config';

import PagePreview from '../cms/previews/PagePreview';
import PostPreview from '../cms/previews/PostPreview';
import JobPreview from '../cms/previews/JobPreview';
import PortfolioPreview from '../cms/previews/PortfolioPreview';

const CMS = dynamic(
  (async () => {
    const cms = (await import('netlify-cms-app')).default;
    cms.registerPreviewStyle('/admin/styles.css');
    cms.registerPreviewStyle('/admin/main.css');
    cms.registerPreviewTemplate('pages', PagePreview);
    cms.registerPreviewTemplate('posts', PostPreview);
    cms.registerPreviewTemplate('jobs', JobPreview);
    cms.registerPreviewTemplate('portfolio', PortfolioPreview);
    cms.init({ config } as InitOptions);
  }) as any,
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
