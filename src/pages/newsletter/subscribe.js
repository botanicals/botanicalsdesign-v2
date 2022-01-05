import React from "react"

import "../../styles/main.scss"

import SubscribeForm from "../../components/SubscribeForm"
import SEO from "../../components/SEO"

export default () => {
  const seo = {
    title: "Subscribe to our Newsletter | Botanicals Design",
    description:
      "Subscribe to the BOTANICALS emailing list for shipment updates, professional tips and tricks, and updates and news about us. You choose what information you want to recieve.",
    imagePath: "/heroes/blog-small-1x.jpg",
    urlPath: "/newsletter/subscribe",
  }

  return (
    <>
      <SEO config={seo} />
      <div className="full-page">
        <SubscribeForm />
      </div>
    </>
  )
}
