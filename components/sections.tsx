import { Fragment } from 'react';

import BasicContent from './sections/basic-content';
import ContentOnImages from './sections/content-on-images';
import ColumnContent from './sections/column-content';
import VisitOurLocations from './sections/visit-our-locations';
import BotanicalsInsider from './sections/botanicals-insider';
import SeeOurPortfolios from './sections/see-our-portfolios';
import MeetTheOwners from './sections/meet-the-owners';
import RequestAConsulation from './sections/request-a-consultation';
import DesignProcess from './sections/design-process';
import PlantscapeMaintenance from './sections/plantscape-maintenance';
import YoutubeEmbed from './sections/youtube-embed';

// Map object keys to section components
const sectionComponents: { [key: string]: React.FC<any> } = {
  basicContent: BasicContent,
  contentOnImages: ContentOnImages,
  columnContent: ColumnContent,
  visitOurLocations: VisitOurLocations,
  botanicalsInsider: BotanicalsInsider,
  seeOurPortfolio: SeeOurPortfolios,
  meetTheOwners: MeetTheOwners,
  requestAConsultation: RequestAConsulation,
  designProcess: DesignProcess,
  plantscapeMaintenance: PlantscapeMaintenance,
  youtubeEmbed: YoutubeEmbed,
};

// Display a section individually
const Section = ({ sectionData, preview }: { sectionData: any; preview?: boolean }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.type];

  if (!SectionComponent) {
    // No matching component for this page section
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} preview={preview} />;
};

// Display the list of sections
const Sections = ({ sections, preview }: { sections: any[]; preview?: boolean }) => {
  return (
    <Fragment>
      {sections.map((section, index) => {
        return <Section key={`${section.type}-${index}`} sectionData={section} preview={preview} />;
      })}
    </Fragment>
  );
};

export default Sections;
