import React from "react"

import BusinessDetails from "./sections/business-details"
import ContactForm from "./sections/contact-form"
import EmailForm from "./sections/email-form"
import ImageGallery from "./sections/image-gallery"
import RichText from "./sections/rich-text"
import Testimonials from "./sections/testimonials"
import TextWithBusinessInfo from "./sections/text-with-business-info"
import Text from "./sections/text"

// Map Strapi sections to section components
const sectionComponents = {
  "sections.business-details": BusinessDetails,
  "sections.contact-form": ContactForm,
  "sections.email-form": EmailForm,
  "sections.image-gallery": ImageGallery,
  "sections.rich-text": RichText,
  "sections.testimonials": Testimonials,
  "sections.text-with-business-info": TextWithBusinessInfo,
  "sections.text": Text,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent =
    sectionComponents[sectionData.strapi_component || sectionData.__component]

  if (!SectionComponent) {
    // No matching component for this page section
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

// Display the list of sections
const Sections = ({ sections }) => {
  return (
    <React.Fragment>
      {sections.map((section, index) => (
        <Section
          sectionData={section}
          key={`${section.strapi_component}${(section.id, index)}`}
        />
      ))}
    </React.Fragment>
  )
}

export default Sections
