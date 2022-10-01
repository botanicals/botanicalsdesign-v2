import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

import { Section, Row, Column } from '../../components/layouts';

import RetailContactForm from '../../components/forms/retail-contact-form';

interface RetailContactProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
  contact: {
    image: {
      source: string;
      alt: string;
      caption?: string;
    };
  };
}

const RetailContact: NextPage<RetailContactProps> = ({ name, hero, metadata, contact }) => {
  // Check if the required data was provided
  if (!contact) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout hero={hero} seo={metadata}>
      <Section>
        <Row>
          <Column width={50}>
            <figure>
              <img src={contact.image.source} alt={contact.image.alt} />
            </figure>
          </Column>
          <Column width={50}>
            <RetailContactForm location={name} />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../cms/content/locations', true, /\.md$/));

  const paths = slugs.map(slug => ({
    params: {
      location: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { location } = context.params!;

  const pageData = await import(`../../cms/content/locations/${location}.md`).catch(error => null);

  if (!pageData) {
    return { props: {} };
  }

  const { name, hero, metadata, contactForm } = pageData.attributes;

  return {
    props: {
      name,
      hero: {
        ...hero,
        heading: contactForm.heading,
        subheading: contactForm.subheading,
      },
      metadata: {
        title: contactForm.title,
        description: contactForm.description,
      },
      contact: contactForm,
    },
  };
};

export default RetailContact;
