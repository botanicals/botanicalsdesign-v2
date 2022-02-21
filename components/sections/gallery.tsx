interface GallerySectionProps {
  data: {
    type: 'gallery';
    images: {
      cols?: number;
      rows?: number;
      source: string;
      alt?: string;
      caption?: string;
    }[];
  };
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  return (
    <div className="max-w-7xl image-gallery">
      {data.images.map((image, index) => (
        <figure
          className="image-gallery-item"
          key={`${index}-image`}
          style={{
            gridColumn: `span ${image.cols ? `${image.cols}` : '1'}`,
            gridRow: `span ${image.rows ? `${image.rows}` : '1'}`,
          }}
        >
          <img className="image-gallery-item__image" src={image.source} alt={`${image.alt || `kaysville gallery image ${index + 1}`}`}></img>
        </figure>
      ))}
    </div>
  );
};

export default GallerySection;
