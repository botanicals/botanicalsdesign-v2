import React from "react"

const Gallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <figure
          className="image-gallery-item"
          key={`${index}-image`}
          style={{
            gridColumn: `span ${
              image.node.context && image.node.context.custom.columns
                ? `${image.node.context.custom.columns}`
                : "1"
            }`,
            gridRow: `span ${
              image.node.context && image.node.context.custom.rows
                ? `${image.node.context.custom.rows}`
                : "1"
            }`,
          }}
        >
          <img
            className="image-gallery-item__image"
            src={image.node.secure_url}
            alt={`${
              image.node.context
                ? image.node.context.custom.alt
                : `kaysville gallery image ${index + 1}`
            }`}
          ></img>
        </figure>
      ))}
    </div>
  )
}

export default Gallery
