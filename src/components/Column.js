import React from "react"

function Column(props) {
  return (
    <div
      className={
        props.centered
          ? `column column__${props.width} column--centered`
          : `column column__${props.width}`
      }
    >
      {props.children}
    </div>
  )
}

export default Column
