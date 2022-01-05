import React from "react"

import Section from "../section"

const ImageGallery = ({ data }) => {
  console.log(data)
  return (
    <Section>
      <div className="grid grid-cols-4 gap-6 grid-flow-row-dense">
        {data.gallery.map((item, index) => (
          <figure
            key={`${index}-image`}
            style={{
              gridColumn: `span ${item.columns || 1}`,
              gridRow: `span ${item.rows || 1}`,
            }}
          >
            <img
              className="w-full h-full object-cover"
              src={item.image.formats.medium.url}
              alt={
                item.image.alternativeText ||
                `gibby floral gallery image ${index + 1}`
              }
            ></img>
          </figure>
        ))}
      </div>
    </Section>
  )
}

export default ImageGallery
