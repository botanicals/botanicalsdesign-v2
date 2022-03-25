import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import rehypeRaw from 'rehype-raw';
// import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

const MarkdownText = ({ markdown, children }: { markdown?: string; children?: string }) => {
  return (
    <Markdown
      className="prose max-w-none prose-p:text-xl prose-a:text-primary-red prose-a:font-light prose-a:no-underline hover:prose-a:underline"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
    >
      {String(children || markdown)}
    </Markdown>
  );
};

export default MarkdownText;
