import React from "react"

function RetailContactForm(props) {
  const location = props.location

  return (
    <form
      method="post"
      action="/contact/thanks/"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name={`${location} Retail Contact`}
      className="retail-contact"
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value={`${location} Retail Contact`}
      />
      <input type="hidden" name="store location" value={location} />
      <fieldset>
        <legend>Sender Info</legend>
        <label className="top">
          Name*
          <input type="text" name="name" required />
        </label>
        <label className="top">
          Phone
          <input type="tel" name="phone" />
        </label>
        <label className="top">
          Email*
          <input type="email" name="email" required />
        </label>
      </fieldset>
      <fieldset>
        <legend>Message Info</legend>

        <label className="top">
          Subject*
          <input type="text" name="subject" required />
        </label>
        <label className="top">
          Message*
          <textarea name="message" required rows="8" />
        </label>

        <input
          className="submit submit--contact"
          type="submit"
          value="Send My Message"
        />
      </fieldset>
    </form>
  )
}

export default RetailContactForm
