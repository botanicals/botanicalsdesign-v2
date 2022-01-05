import React from "react"

const TextList = ({ list }) => {
  return (
    <React.Fragment>
      {list.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </React.Fragment>
  )
}

export default TextList
