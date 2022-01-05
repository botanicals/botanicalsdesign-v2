import React from "react"
import { Link } from "gatsby"

import Section from "../components/section"
import PageLayout from "../layouts/PageLayout"

const ThanksPage = () => {
  return (
    <PageLayout metadata={{ title: "Thank you! | Gibby Floral" }}>
      <Section>
        <div className="py-8">
          <div className="text-center">
            <p className="subheading text-green">Success!</p>
            <h1 className="heading-display">Thank you for your submission!</h1>
            <p className="mt-2 text-gray-900">We are glad to hear from you.</p>
            <div className="mt-6">
              <Link to="/" className="link-button">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

export default ThanksPage
