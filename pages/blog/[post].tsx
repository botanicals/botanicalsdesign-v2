import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';
import { Post } from './index';

import { formatDate } from '../../utils/format-date';

import { Section, Row, Column } from '../../components/layouts';
import MarkdownText from '../../components/utility/markdown-text';

interface PostPageProps {
  name: string;
  hero: HeroProps;
  metadata: Metadata;
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ name, hero, metadata, post }) => {
  // Check if the required data was provided
  if (!post) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout heading={name} hero={hero} seo={metadata}>
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
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../content/posts', true, /\.md$/));

  const paths = slugs.map(slug => ({
    params: {
      post: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { post } = context.params!;

  const blogData = await import(`../../content/pages/blog.md`).catch(error => null);
  const postData = await import(`../../content/posts/${post}.md`).catch(error => null);

  if (!postData || !blogData) {
    return { props: {} };
  }

  const { hero } = blogData.attributes;

  const { name, author, metadata } = postData.attributes;

  return {
    props: {
      name,
      hero: {
        ...hero,
        subheading: `${name} by ${author}`,
      },
      metadata,
      post: { ...postData.attributes, content: postData.body },
    },
  };
};

export default PostPage;
