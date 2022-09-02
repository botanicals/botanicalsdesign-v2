import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

import { Section, Row, Column } from '../../components/layouts';
import Button from '../../components/elements/button';
import SubscribeForm from '../../components/forms/subscribe-form';
import Gallery from '../../components/gallery';
import MarkdownText from '../../components/utility/markdown-text';

interface LocationPageProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
  sections: any;
}

const LocationPage: NextPage<LocationPageProps> = ({ name, hero, metadata, sections: { about, visit, additional, gallery, insider } }) => {
  // Check if the required data was provided
  if (!about || !visit) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout hero={hero} seo={metadata}>
      <Section heading={about.heading}>
        <Row>
          <Column width={50}>
            <MarkdownText>{about.content}</MarkdownText>
            <h3 className="heading heading__h3 heading__h3--green">{about.subheading}</h3>
            <Button href={about.callUs.href} external>
              {about.callUs.text}
            </Button>
            <Button href={about.emailUs.href}>{about.emailUs.text}</Button>
          </Column>

          <Column width={50}>
            <figure>
              <img src={about.image.source} alt={about.image.alt} />
            </figure>
          </Column>
        </Row>
      </Section>

      <Section heading={visit.heading}>
        <Row>
          <Column width={50}>
            <iframe src={visit.map.source} width="100%" height="100%" frameBorder="0" allowFullScreen={false} loading="lazy" title={visit.map.title}></iframe>
          </Column>
          <Column width={50}>
            <MarkdownText>{visit.businessInfo}</MarkdownText>
          </Column>
        </Row>
      </Section>

      {additional && (
        <Section heading={additional.heading}>
          <Row>
            <Column width={100}>
              <MarkdownText>{additional.content}</MarkdownText>
              {additional.button && additional.button.text && additional.button.href && (
                <Button href={additional.button.href} external={additional.button.external}>
                  {additional.button.text}
                </Button>
              )}
            </Column>
          </Row>
        </Section>
      )}

      <Section heading={gallery.heading}>
        <Row>
          <Column width={100}>
            <Gallery images={gallery.images} />
          </Column>
        </Row>
      </Section>

      <Section heading={insider.heading}>
        <Row>
          <Column width={50}>
            <MarkdownText>{insider.content}</MarkdownText>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">{insider.featuredText}</h3>
          </Column>
          <Column width={50}>
            <SubscribeForm />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../content/locations', true, /\.md$/));

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

  const pageData = await import(`../../content/locations/${location}.md`).catch(error => null);

  if (!pageData) {
    return { props: {} };
  }

  const { name, hero, aboutUs, visitUs, additionalContent, gallery, botanicalsInsider, metadata } = pageData.attributes;

  return {
    props: {
      name,
      hero,
      metadata,
      sections: {
        about: aboutUs,
        visit: visitUs,
        additional: additionalContent || null,
        gallery,
        insider: botanicalsInsider,
      },
    },
  };
};

export default LocationPage;
