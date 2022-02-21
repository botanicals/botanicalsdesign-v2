import MarkdownText from '../utility/markdown-text';

interface ContentSectionProps {
  data: {
    type: 'content';
    content: string;
  };
}

const ContentSection: React.FC<ContentSectionProps> = ({ data }) => {
  return (
    <section className="prose">
      <MarkdownText>{data.content}</MarkdownText>
    </section>
  );
};

export default ContentSection;
