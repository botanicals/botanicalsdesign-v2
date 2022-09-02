import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

import { Section, Row, Column } from '../../components/layouts';

type PortfolioSection = {
  heading: string;
  images: {
    source: string;
    alt?: string;
    caption?: string;
  }[];
};

interface PortfolioPageProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
  commercial: PortfolioSection[];
  residential: PortfolioSection[];
}

const PortfolioPage: NextPage<PortfolioPageProps> = ({ name, hero, metadata, commercial, residential }) => {
  // Check if the required data was provided
  if (!commercial || !residential) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout hero={hero} seo={metadata}>
      <Section heading="Commercial">
        {commercial.map(({ images, heading }, index) => (
          <Row key={index}>
            <Column width={100}>
              <h3 className="heading heading__h3 heading__h3--red">{heading}</h3>
              <div className="space-y-8">
                {images.map((image, index) => (
                  <figure key={index}>
                    <img src={image.source} alt={image.alt || `${name} portfolio - Commercial - ${heading} - ${index}`} />
                  </figure>
                ))}
              </div>
            </Column>
          </Row>
        ))}
      </Section>

      <Section heading="Residential">
        {residential.map(({ images, heading }, index) => (
          <Row key={index}>
            <Column width={100}>
              <h3 className="heading heading__h3 heading__h3--red">{heading}</h3>
              <div className="space-y-8">
                {images.map((image, index) => (
                  <figure key={index}>
                    <img src={image.source} alt={image.alt || `${name} portfolio - Residential - ${heading} - ${index}`} />
                  </figure>
                ))}
              </div>
            </Column>
          </Row>
        ))}
      </Section>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../content/portfolio', true, /\.md$/));

  const paths = slugs.map(slug => ({
    params: {
      portfolio: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { portfolio } = context.params!;

  const pageData = await import(`../../content/portfolio/${portfolio}.md`).catch(error => null);

  if (!pageData) {
    return { props: {} };
  }

  const { name, hero, commercial, residential, metadata } = pageData.attributes;

  return {
    props: {
      name,
      hero,
      metadata,
      commercial,
      residential,
    },
  };
};

export default PortfolioPage;
