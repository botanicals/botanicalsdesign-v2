import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface ContentSectionProps {
  data: {
    type: 'content';
    heading: string;
    content: string;
  };
}

const ContentSection: React.FC<ContentSectionProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={100}>
          <MarkdownText>{data.content}</MarkdownText>
        </Column>
      </Row>
    </Section>
  );
};

export default ContentSection;
