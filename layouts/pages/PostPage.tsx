import Link from 'next/link';

import { formatDate } from '../../utils/format-date';

import { Section, Row, Column } from '../../components/layouts';
import MarkdownText from '../../components/utility/markdown-text';

import { Post } from '../../pages/blog';

interface PostPageProps {
  post: Post;
}

const PostPage: React.VFC<PostPageProps> = ({ post }) => {
  return (
    <>
      <Section>
        <Row>
          <Column width={100}>
            <p>
              <Link href="/">
                <a>Botanicals Design</a>
              </Link>{' '}
              &rsaquo;{' '}
              <Link href="/blog">
                <a>Blog</a>
              </Link>{' '}
              &rsaquo; {post.name}
            </p>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row>
          <Column width={100}>
            <p className="post__metadata">{`Written by ${post.author} on ${formatDate(post.date)}`}</p>
            <MarkdownText>{post.content}</MarkdownText>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default PostPage;
