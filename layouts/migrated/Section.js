import React from "react"

function Section(props) {
  return (
    <section
      className={props.fullWidth ? "section section--full-width" : "section"}
    >
      {props.fullWidth ? (
        <div className="section__full-width-content-container">
          <h2 className="heading heading__h2">{props.sectionHeading}</h2>
          {props.children}
        </div>
      ) : (
        <>
          <h2 className="heading heading__h2">{props.sectionHeading}</h2>
          {props.children}
        </>
      )}
    </section>
  )
}

export default Section
