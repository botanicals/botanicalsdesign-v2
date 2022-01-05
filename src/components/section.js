import React from "react"

const Section = ({ children, customClassName }) => {
  return (
    <section
      className={`${
        !customClassName
          ? "max-w-7xl bg-white mx-auto px-8 pb-16 pt-2 md:py-16"
          : customClassName
      }`}
    >
      {children}
    </section>
  )
}

export default Section
