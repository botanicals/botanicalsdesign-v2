import { Fragment } from 'react';
import Button from '../elements/button';
import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface ContentSectionProps {
  type: 'markdown' | 'image' | 'button' | 'featureBox';
  content?: string;
  text?: string;
  href?: string;
  alt?: string;
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
          return (
            <figure key={index}>
              <img src={section.source} alt={section.alt} />
              <figcaption>{section.caption}</figcaption>
            </figure>
          );
        }

        if (section.type === 'button') {
          return (
            <Button key={index} href={section.href!}>
              {section.text}
            </Button>
          );
        }

        if (section.type === 'featureBox') {
          return (
            <h3 key={index} className="heading heading__h3 heading__h3--green heading__quote">
              {section.text}
            </h3>
          );
        }

        return 'Error';
      })}
    </Fragment>
  );
};

const ColumnContent: React.FC<ColumnContentProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={data.layout === '1/3 | 2/3' ? 33 : data.layout === '2/3 | 1/3' ? 66 : 50}>
          <ContentSection sections={data.leftColumn} />
        </Column>
        <Column width={data.layout === '1/3 | 2/3' ? 66 : data.layout === '2/3 | 1/3' ? 33 : 50}>
          <ContentSection sections={data.rightColumn} />
        </Column>
      </Row>
    </Section>
  );
};

export default ColumnContent;
