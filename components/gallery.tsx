type Image = {
  source: string;
  alt: string;
  columns: string;
  rows: string;
};

interface GalleryProps {
  images: Image[];
}

const Gallery: React.VFC<GalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <figure
          className="image-gallery-item"
          key={`${index}-image`}
          style={{
            gridColumn: `span ${image.columns ? `${image.columns}` : '1'}`,
            gridRow: `span ${image.rows ? `${image.rows}` : '1'}`,
          }}
        >
          <img className="image-gallery-item__image" src={image.source} alt={`${image.alt || `kaysville gallery image ${index + 1}`}`}></img>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
