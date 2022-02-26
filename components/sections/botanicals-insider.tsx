import { Row, Column, Section } from '../layouts';

import SubscribeForm from '../forms/subscribe-form';
import MarkdownText from '../utility/markdown-text';

interface BotanicalsInsiderProps {
  data: {
    type: 'botanicalsInsider';
    heading: string;
    content: string;
    featuredText: string;
  };
}

const BotanicalsInsider: React.FC<BotanicalsInsiderProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={50}>
          <MarkdownText>{data.content}</MarkdownText>
          <h3 className="heading heading__h3 heading__h3--green heading__quote">{data.featuredText}</h3>
        </Column>
        <Column width={50}>
          <SubscribeForm />
        </Column>
      </Row>
    </Section>
  );
};

export default BotanicalsInsider;
