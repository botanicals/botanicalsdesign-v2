import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import LocationPage from '../../layouts/pages/LocationPage';

const LocationPreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  const hero = entry.getIn(['data', 'hero'])?.toJS();
  const aboutUs = entry.getIn(['data', 'aboutUs'])?.toJS();
  const visitUs = entry.getIn(['data', 'visitUs'])?.toJS();
  const additionalContent = entry.getIn(['data', 'additionalContent'])?.toJS();
  const gallery = entry.getIn(['data', 'gallery'])?.toJS();
  const botanicalsInsider = entry.getIn(['data', 'botanicalsInsider'])?.toJS();
  const metadata = entry.getIn(['data', 'metadata'])?.toJS();

  return (
    <PageLayout hero={hero} seo={metadata}>
      <LocationPage
        sections={{
          about: aboutUs,
          visit: visitUs,
          additional: additionalContent || null,
          gallery,
          insider: botanicalsInsider,
        }}
        preview={true}
      />
    </PageLayout>
  );
};

export default LocationPreview;
