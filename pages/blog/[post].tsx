import ErrorPage from 'next/error';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';
import PostPageLayout from '../../layouts/pages/PostPage';

import { Post } from './index';

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
      <PostPageLayout post={post} />
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../cms/content/posts', true, /\.md$/));

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

  const blogData = await import(`../../cms/content/pages/blog.md`).catch(error => null);
  const postData = await import(`../../cms/content/posts/${post}.md`).catch(error => null);

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
