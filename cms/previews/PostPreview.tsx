import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import PostPage from '../../layouts/pages/PostPage';

import { attributes as blogData } from '../../cms/content/pages/blog.md';

const PostPreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const post = entry.getIn(['data']).toJS();

  return (
    <PageLayout heading={post.name} hero={{ ...blogData.hero, subheading: `${post.name} by ${post.author}` }} seo={post.metadata}>
      <PostPage post={{ ...post, content: post.body }} />
    </PageLayout>
  );
};

export default PostPreview;
