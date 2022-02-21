import { Row, Column, Section } from '../layouts';

import SubscribeForm from '../forms/subscribe-form';

interface NewsletterSectionProps {
  data: {
    type: 'newsletter';
  };
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ data }) => {
  return (
    <Section heading="More than just pots&#8230;">
      <Row>
        <Column width={50}>
          <p>
            We offer more than just pottery and decor at our retail locations. We are constantly evolving and growing at our stores. We are starting to implement more events, such as plantings, bonsai
            club meetings, and more.
          </p>
          <h3 className="heading heading__h3 heading__h3--green heading__quote">Become an Botanicals Design Insider to stay updated...</h3>
        </Column>
        <Column width={50}>
          <SubscribeForm />
        </Column>
      </Row>
    </Section>
  );
};

export default NewsletterSection;
