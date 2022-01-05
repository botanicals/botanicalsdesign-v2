import React from "react"
import { Link } from "gatsby"

import { MailIcon, HomeIcon } from "@heroicons/react/outline"

const Footer = () => {
  return (
    <footer className="max-w-7xl bg-white mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <Link to="/" className="text-gray-500 hover:text-gray-600">
          <span className="sr-only">Home</span>
          <HomeIcon className="h-6 w-6" aria-hidden="true" />
        </Link>
        <Link to="/contact" className="text-gray-500 hover:text-gray-600">
          <span className="sr-only">Contact</span>
          <MailIcon className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Gibby Floral. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
