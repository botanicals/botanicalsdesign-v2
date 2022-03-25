import { Fragment } from 'react';
import Button from '../elements/button';
import Image from '../elements/image';
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
      <div className="">
        <Column width={100}>
          <MarkdownText>{data.content}</MarkdownText>
          <Button href={data.button.href} external={data.button.external}>
            {data.button.text}
          </Button>
        </Column>
      </div>

      <div className="grid md:grid-cols-3 gap-x-8">
        {data.images.map((image, index) => (
          <div key={index}>
            <Image source={image.source} alt={image.alt} caption={image.caption} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ContentOnImages;
