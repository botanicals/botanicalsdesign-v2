import { Section, Row, Column } from '../../components/layouts';
import Button from '../../components/elements/button';
import SubscribeForm from '../../components/forms/subscribe-form';
import Gallery from '../../components/gallery';
import MarkdownText from '../../components/utility/markdown-text';

interface LocationPageProps {
  sections: any;
  preview?: boolean;
}

const LocationPage: React.VFC<LocationPageProps> = ({ sections: { about, visit, additional, gallery, insider }, preview }) => {
  return (
    <>
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
              {additional.content && <MarkdownText>{additional.content}</MarkdownText>}
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
          <Column width={50}>{preview ? <p>Form does not render in preview mode</p> : <SubscribeForm />}</Column>
        </Row>
      </Section>
    </>
  );
};

export default LocationPage;
