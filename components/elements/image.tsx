interface ImageProps {
  source: string;
  alt: string;
  caption?: string;
}

const Image: React.VFC<ImageProps> = ({ source, alt, caption }) => {
  return (
    <figure className="w-full">
      <img className="w-full" src={source} alt={alt} />
      {caption ? <figcaption className="my-2 text-sm font-light tracking-wider text-center uppercase">{caption}</figcaption> : null}
    </figure>
  );
};

export default Image;
