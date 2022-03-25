import { Fragment } from 'react';
import classNames from '../../utils/class-names';
import Button from '../elements/button';
import FeatureBox from '../elements/feature-box';
import Image from '../elements/image';
import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface ContentSectionProps {
  type: 'markdown' | 'image' | 'button' | 'featureBox';
  content?: string;
  text?: string;
  href?: string;
  alt?: string;
  external?: boolean;
  caption?: string;
  source?: string;
}

interface ColumnContentProps {
  data: {
    type: 'columnContent';
    layout: '1/2 | 1/2' | '1/3 | 2/3' | '2/3 | 1/3';
    heading: string;
    leftColumn: ContentSectionProps[];
    rightColumn: ContentSectionProps[];
  };
}

const ContentSection: React.VFC<{ sections: ContentSectionProps[] }> = ({ sections }) => {
  return (
    <Fragment>
      {sections.map((section, index) => {
        if (section.type === 'markdown') {
          return <MarkdownText key={index}>{section.content}</MarkdownText>;
        }

        if (section.type === 'image') {
          return <Image key={index} source={section.source!} alt={section.alt!} caption={section.caption} />;
        }

        if (section.type === 'button') {
          return (
            <Button key={index} href={section.href!} external={section.external}>
              {section.text}
            </Button>
          );
        }

        if (section.type === 'featureBox') {
          return <FeatureBox key={index} text={section.text!} />;
        }

        return 'Error';
      })}
    </Fragment>
  );
};

const ColumnContent: React.FC<ColumnContentProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <div className={classNames(data.layout === '1/3 | 2/3' ? 'md:grid-cols-3' : data.layout === '2/3 | 1/3' ? 'md:grid-cols-3' : 'md:grid-cols-2', `grid gap-x-8 bg-blue-200`)}>
        <div className={classNames(data.layout === '1/3 | 2/3' ? 'col-span-1' : data.layout === '2/3 | 1/3' ? 'md:col-span-2' : 'col-span-1')}>
          <ContentSection sections={data.leftColumn} />
        </div>
        <div className={classNames(data.layout === '1/3 | 2/3' ? 'md:col-span-2' : data.layout === '2/3 | 1/3' ? 'col-span-1' : 'col-span-1')}>
          <ContentSection sections={data.rightColumn} />
        </div>
      </div>
    </Section>
  );
};

export default ColumnContent;
