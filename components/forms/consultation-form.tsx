import React from 'react';

const ConsultationForm = () => {
  return (
    <form method="post" action="/contact/thanks/" netlify-honeypot="bot-field" data-netlify="true" name="Request Consultation Form" className="retail-contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Request Consultation Form" />
      <input type="hidden" name="subject" value="New Consultation Request from Website" />
      <fieldset>
        <legend>Return Contact Info</legend>
        <label className="top">
          Name*
          <input type="text" name="name" required />
        </label>
        <label className="top">
          Phone*
          <input type="tel" name="phone" required />
        </label>
        <label className="top">
          Email*
          <input type="email" name="email" required />
        </label>
      </fieldset>
      <fieldset>
        <legend>About your Space</legend>

        <label className="top">
          Street Address
          <input type="text" name="address1" />
        </label>
        <label className="top">
          City, State*
          <input type="text" name="address2" required />
        </label>
        <label className="top">
          Zipcode
          <input type="text" name="address3" />
        </label>

        <div>I am interested in a design for a:</div>
        <label className="sbs">
          <input type="radio" name="space-type" value="residential" /> Residential Space
        </label>
        <label className="sbs">
          <input type="radio" name="space-type" value="commercial" /> Commercial Space
        </label>

        <div>I am already working with:</div>
        <label className="sbs">
          <input type="checkbox" name="architect" value="yes" /> Architect
        </label>
        <label className="sbs">
          <input type="checkbox" name="interior-designer" value="yes" /> Interior Designer
        </label>
        <label className="sbs">
          <input type="checkbox" name="landscaper" value="yes" /> Landscaper
        </label>
        <label className="sbs">
          <input type="checkbox" name="none" value="yes" /> None
        </label>

        <label className="top">
          Briefly describe your space*
          <textarea name="space-description" required rows={8} />
        </label>

        <input className="submit submit--contact" type="submit" value="Send My Consultation Request" />
      </fieldset>
    </form>
  );
};

export default ConsultationForm;
