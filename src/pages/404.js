import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/section"

const NotFoundPage = () => (
  <PageLayout metadata={{ title: "Page not found | Gibby Floral" }}>
    <Section>
      <div className="py-8">
        <div className="text-center">
          <p className="subheading">404 error</p>
          <h1 className="heading text-4xl sm:text-5xl">Page not found</h1>
          <p className="mt-2 text-gray-900">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
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

export default NotFoundPage
