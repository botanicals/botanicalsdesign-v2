import { NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Section, Row, Column } from '../../components/layouts';

const ContactThanks: NextPage = () => {
  return (
    <PageLayout
      heading=""
      hero={{ heading: 'Thank you', subheading: '', image: { source: '/uploads/home-large-2x.jpg', alt: 'close up image of a glazed ceramic pot full of vibrant succulents' } }}
      seo={{ title: 'Thank you for your submission', slug: '' }}
    >
      <Section heading="Your form submission was successful">
        <Row>
          <Column width={100}>
            <p>We thank you for reaching out! We will get back to you shortly.</p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  );
};

export default ContactThanks;
