type Image = {
  secure_url: string;
  context: {
    alt: string;
    columns: string;
    rows: string;
  };
};

interface GalleryProps {
  images: Image[];
}

const Gallery: React.VFC<GalleryProps> = ({ images }) => {
  console.log({ images });
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <figure
          className="image-gallery-item"
          key={`${index}-image`}
          style={{
            gridColumn: `span ${image.context && image.context.columns ? `${image.context.columns}` : '1'}`,
            gridRow: `span ${image.context && image.context.rows ? `${image.context.rows}` : '1'}`,
          }}
        >
          <img className="image-gallery-item__image" src={image.secure_url} alt={`${image.context ? image.context.alt : `kaysville gallery image ${index + 1}`}`}></img>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
