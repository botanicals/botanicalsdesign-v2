import { Fragment } from 'react';
import Button from '../elements/button';
import { Row, Column, Section } from '../layouts';

import MarkdownText from '../utility/markdown-text';

interface ContentOnImagesProps {
  data: {
    type: 'contentOnImages';
    content: string;
    button: {
      text: string;
      href: string;
      external?: boolean;
    };
    images: {
      source: string;
      alt: string;
      caption?: string;
    }[];
  };
}

const ContentOnImages: React.FC<ContentOnImagesProps> = ({ data }) => {
  return (
    <Section heading="A Botanicals plantscape">
      <Row>
        <Column width={100}>
          <MarkdownText>{data.content}</MarkdownText>
          <Button href={data.button.href} external={data.button.external}>
            {data.button.text}
          </Button>
        </Column>
      </Row>
      <Row>
        {data.images.map((image, index) => (
          <Column key={index} width={33}>
            <figure>
              <img src={image.source} alt={image.alt} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export default ContentOnImages;
