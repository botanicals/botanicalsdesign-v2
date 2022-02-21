import Link from 'next/link';

interface PostCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, author, date, excerpt, slug }) => (
  <div className="blog__card">
    <img src={image} alt="" />
    <div className="blog__details">
      <h2>{title}</h2>
      <p className="blog__metadata">
        {author} | {date}
      </p>
      <p>{excerpt}</p>
      <Link href={slug}>
        <a className="blog__read-more">Read More &#8811;</a>
      </Link>
    </div>
  </div>
);

export default PostCard;
