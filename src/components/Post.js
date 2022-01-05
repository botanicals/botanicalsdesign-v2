import React from "react"
import { Link } from "gatsby"

const Post = props => (
  <div className="blog__card">
    <img src={props.image} alt="" />
    <div className="blog__details">
      <h2>{props.title}</h2>
      <p className="blog__metadata">
        {props.author} | {props.date}
      </p>
      <p>{props.excerpt}</p>
      <Link className="blog__read-more" to={props.readMore}>
        Read More &#8811;
      </Link>
    </div>
  </div>
)

export default Post
