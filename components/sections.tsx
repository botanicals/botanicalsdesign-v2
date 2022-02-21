import { Fragment } from 'react';

import ContentSection from './sections/content';
import ImageSection from './sections/image';

// Map object keys to section components
const sectionComponents: { [key: string]: React.FC<any> } = {
  content: ContentSection,
  image: ImageSection,
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
