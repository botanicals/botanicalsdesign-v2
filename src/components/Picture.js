import React from "react"

import "lazysizes"

function Picture(props) {
  if (props.column === 50) {
    return (
      <figure>
        <picture>
          {/* up to 600px, use the image that is small portrait mode and has a width of 535px */}
          <source
            sizes="500px"
            media="(max-width: 600px)"
            data-srcset={`/images/${props.page}/${props.imageName}-portrait-small-1x.${props.ext} 535w, /images/${props.page}/${props.imageName}-portrait-small-2x.${props.ext} 1070w`}
          />
          {/* up to 1000px, use the normal image that is large and has a width of 890px */}
          <source
            sizes="800px"
            media="(max-width: 1000px)"
            data-srcset={`/images/${props.page}/${props.imageName}-large-1x.${props.ext} 890w, /images/${props.page}/${props.imageName}-large-2x.${props.ext} 1780w`}
          />
          {props.breakpoint === 1200 ? (
            <>
              {/* up to 1199px, use the image that is small portrait mode and has a width of 535px */}
              <source
                sizes="500px"
                media="(max-width: 1199px)"
                data-srcset={`/images/${props.page}/${props.imageName}-portrait-small-1x.${props.ext} 535w, /images/${props.page}/${props.imageName}-portrait-small-2x.${props.ext} 1070w`}
              />
              {/* at 1200px and above, use the normal image that has a width of 690px */}
              <source
                sizes="600px"
                media="(min-width: 1200px)"
                data-srcset={`/images/${props.page}/${props.imageName}-1x.${props.ext} 690w, /images/${props.page}/${props.imageName}-2x.${props.ext} 1380w`}
              />
            </>
          ) : (
            <>
              {/* up to 1399px, use the image that is normal portrait mode and has a width of 690px */}
              <source
                sizes="500px"
                media="(max-width: 1399px)"
                data-srcset={`/images/${props.page}/${props.imageName}-portrait-1x.${props.ext} 535w, /images/${props.page}/${props.imageName}-portrait-small-2x.${props.ext} 1070w`}
              />
              {/* at 1400px and above, use the normal image that has a width of 690px */}
              <source
                sizes="600px"
                media="(min-width: 1400px)"
                data-srcset={`/images/${props.page}/${props.imageName}-1x.${props.ext} 690w, /images/${props.page}/${props.imageName}-2x.${props.ext} 1380w`}
              />
            </>
          )}

          <img
            className="lazyload"
            data-srcset={`/images/${props.page}/${props.imageName}-1x.${props.ext}`}
            alt={props.alt}
          />
        </picture>
        <figcaption>{props.caption}</figcaption>
      </figure>
    )
  } else if (props.column === 33) {
    return (
      <figure>
        <picture>
          {/* up to 600px, use the image that is small portrait mode and has a width of 535px */}
          <source
            sizes="500px"
            media="(max-width: 600px)"
            data-srcset={`/images/${props.page}/${props.imageName}-1x.${props.ext} 535w, /images/${props.page}/${props.imageName}-2x.${props.ext} 1070w`}
          />
          {/* up to 1000px, use the normal image that is large and has a width of 890px */}
          <source
            sizes="800px"
            media="(max-width: 1000px)"
            data-srcset={`/images/${props.page}/${props.imageName}-large-1x.${props.ext} 890w, /images/${props.page}/${props.imageName}-large-2x.${props.ext} 1780w`}
          />
          {/* at 1400px and above, use the normal image that has a width of 440px */}
          <source
            sizes="400px"
            media="(min-width: 1400px)"
            data-srcset={`/images/${props.page}/${props.imageName}-small-1x.${props.ext} 690w, /images/${props.page}/${props.imageName}-small-2x.${props.ext} 1380w`}
          />

          <img
            className="lazyload"
            data-srcset={`/images/${props.page}/${props.imageName}-1x.${props.ext}`}
            alt={props.alt}
          />
        </picture>
        <figcaption>{props.caption}</figcaption>
      </figure>
    )
  }
}

export default Picture
