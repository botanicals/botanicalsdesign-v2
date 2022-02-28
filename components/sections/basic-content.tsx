import Button from '../elements/button';
import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface BasicContentProps {
  data: {
    type: 'basicContent';
    heading: string;
    content: string;
    button?: {
      text?: string;
      href?: string;
      external?: boolean;
    };
  };
}

const BasicContent: React.FC<BasicContentProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={100}>
          <MarkdownText>{data.content}</MarkdownText>
          {data.button && data.button.href && data.button.text && (
            <Button href={data.button.href} external={data.button.external}>
              {data.button.text}
            </Button>
          )}
        </Column>
      </Row>
    </Section>
  );
};

export default BasicContent;
