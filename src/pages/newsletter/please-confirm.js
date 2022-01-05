import React from "react"

import "../../styles/main.scss"

export default () => {
  return (
    <div
      className="full-page"
      style={{ padding: "4rem 10rem", backgroundColor: "#F3F1F1" }}
    >
      <p>
        Thank you for subscribing to our emailing list! We are excited to be in
        communication with you.
      </p>
      <p>
        <strong>IMPORTANT: </strong> Please visit your email to confirm your
        subscription. You will NOT recieve emails until you have confirmed your
        subscription via email. If you do not recieve a confirmation email, try
        checking your spam. The email could have accidentally been sent there by
        your filters.
      </p>
    </div>
  )
}
