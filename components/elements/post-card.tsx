import Link from 'next/link';

import { Post } from '../../pages/blog';
import { formatDate } from '../../utils/format-date';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="shadow-md">
    <img className="w-full" src={post.image.source} alt={post.image.alt} />
    <div className="p-4">
      <div>
        <h2 className="text-xl uppercase text-primary-red">{post.name}</h2>
        <p className="mt-1 text-base text-gray-700">
          {post.author} | {formatDate(post.date)}
        </p>
      </div>
      <p className="my-3 text-lg line-clamp-3">{post.excerpt}</p>
      <Link href={`/blog/${post.metadata.slug}`}>
        <a className="block my-2 text-lg font-medium text-primary-red hover:underline">Read More &#8811;</a>
      </Link>
    </div>
  </div>
);

export default PostCard;
