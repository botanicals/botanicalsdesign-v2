import Link from 'next/link';

import { Post } from '../../pages/blog';
import { formatDate } from '../../utils/format-date';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="blog__card">
    <img src={post.image.source} alt={post.image.alt} />
    <div className="blog__details">
      <h2>{post.name}</h2>
      <p className="blog__metadata">
        {post.author} | {formatDate(post.date)}
      </p>
      <p>{post.excerpt}</p>
      <Link href={`/blog/${post.metadata.slug}`}>
        <a className="blog__read-more">Read More &#8811;</a>
      </Link>
    </div>
  </div>
);

export default PostCard;
