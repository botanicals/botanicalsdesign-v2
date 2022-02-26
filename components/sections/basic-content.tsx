import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface BasicContentProps {
  data: {
    type: 'basicContent';
    heading: string;
    content: string;
  };
}

const BasicContent: React.FC<BasicContentProps> = ({ data }) => {
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

export default BasicContent;
