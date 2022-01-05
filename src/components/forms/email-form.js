import React from "react"

const EmailForm = () => {
  return (
    <form
      action="/thanks"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Email Capture Form"
      className="grid grid-cols-1 gap-y-6"
    >
      {/* HIDDEN INPUTS FOR NETLIFY FORMS */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Email Capture Form" />
      <input
        type="hidden"
        name="subject"
        value="New email subscriber from gibbyfloral.com"
      />
      {/* END HIDDEN INPUTS */}

      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="form-input"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="form-input"
          placeholder="email@example.com"
          required
        />
      </div>
      <div>
        <button type="submit" className="form-submit">
          Sign me up
        </button>
      </div>
    </form>
  )
}

export default EmailForm
