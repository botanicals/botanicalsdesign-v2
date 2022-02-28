import { NextPage } from 'next';
import ErrorPage from 'next/error';

import PageLayout from '../../layouts/PageLayout';
import { Metadata } from '../../layouts/components/Seo';
import { HeroProps } from '../../layouts/components/Hero';

import PostCard from '../../components/elements/post-card';

export interface Post {
  state: 'Published' | 'Draft';
  featured: boolean;
  name: string;
  author: string;
  date: string;
  excerpt: string;
  image: {
    source: string;
    alt: string;
  };
  content: string;
  metadata: Metadata;
}

interface BlogPageProps {
  name: string;
  heading: string;
  hero: HeroProps;
  metadata: Metadata;
  posts: Post[];
}

const BlogPage: NextPage<BlogPageProps> = ({ name, heading, hero, metadata, posts }) => {
  // Check if the required data was provided
  if (!posts?.length) {
    return <ErrorPage statusCode={500} />;
  }

  console.log({ posts });

  return (
    <PageLayout heading={heading} hero={hero} seo={metadata}>
      <div className="blog-posts-container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../../content/pages/blog.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, heading, hero, metadata } = page.attributes;

  const slugs = (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('../../content/posts', true, /\.md$/));

  const posts = await Promise.all(
    slugs.map(async slug => {
      const post = await import(`../../content/posts/${slug}.md`).catch(error => null);
      return { ...post.attributes, content: post.body };
    })
  );

  // Only return published posts
  const publishedPosts = posts.filter(post => post.state === 'Published');

  // Sort posts by date
  const sortedPosts = publishedPosts.sort((prev, curr) => (new Date(curr.date) as any) - (new Date(prev.date) as any));

  return {
    props: {
      name,
      heading,
      hero,
      metadata,
      posts: sortedPosts,
    },
  };
}

export default BlogPage;
