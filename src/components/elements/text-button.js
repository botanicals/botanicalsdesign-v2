import React from "react"

const TextButton = ({ data }) => {
  return (
    <a href={data.href} className="link-button">
      {data.text} <span aria-hidden="true">&rarr;</span>
    </a>
  )
}

export default TextButton
