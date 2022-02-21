import { Fragment } from 'react';

import ContentSection from './sections/content';
import GallerySection from './sections/gallery';
import ImageSection from './sections/image';
import LocationsSection from './sections/locations';
import NewsletterSection from './sections/newsletter';
import PortfoliosSection from './sections/portfolios';

// Map object keys to section components
const sectionComponents: { [key: string]: React.FC<any> } = {
  content: ContentSection,
  image: ImageSection,
  gallery: GallerySection,
  locations: LocationsSection,
  portfolios: PortfoliosSection,
  newsletter: NewsletterSection,
};

// Display a section individually
const Section = ({ sectionData }: { sectionData: any }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.type];

  if (!SectionComponent) {
    // No matching component for this page section
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections }: { sections: any[] }) => {
  return (
    <Fragment>
      {sections.map((section, index) => {
        return <Section key={`${section.type}-${index}`} sectionData={section} />;
      })}
    </Fragment>
  );
};

export default Sections;
