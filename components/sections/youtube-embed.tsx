import { Column, Row, Section } from '../layouts';

interface YoutubeEmbedProps {
  data: {
    type: 'youtubeEmbed';
    embedId: string;
    title: string;
  };
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ data: { title, embedId } }) => {
  console.log(title, embedId);
  return (
    <Section>
      <Row>
        <Column width={100}>
          <iframe
            className="w-full lg:w-[853px] h-[480px]"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Column>
      </Row>
    </Section>
  );
};

export default YoutubeEmbed;
