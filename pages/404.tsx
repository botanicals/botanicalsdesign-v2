import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Section, Row, Column } from '../components/layouts';

const NotFound: NextPage = () => {
  return (
    <PageLayout heading="Sorry..." hero={{ heading: 'Page not found', subheading: '', image: { name: 'home', ext: 'jpg' } }} seo={{ title: 'Not Found', slug: '' }}>
      <Section heading="We couldn't find the page you are looking for">
        <Row>
          <Column width={100}>
            <p>
              We are sorry, the page you are looking for could not be located. This may be due to a broken link, expired bookmark, or mistyped URL. Please try again using our menu above. We hope you
              find what you are looking for!
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  );
};

export default NotFound;
