import React, { useState } from "react"

import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid"

import Section from "../section"

const Testimonials = ({ data }) => {
  const [reviewIndex, setReviewIndex] = useState(0)

  return (
    <Section customClassName="bg-gradient-to-r from-blue-dark to-blue py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="px-8 mx-auto py-4 flex flex-col sm:flex-row justify-between">
          {/* LEFT ARROW */}
          <button
            className="flex-shrink-0 hidden sm:flex sm:mr-8 items-center cursor-pointer"
            onClick={() => {
              if (reviewIndex > 0) {
                setReviewIndex(reviewIndex - 1)
              } else {
                setReviewIndex(data.testimonials.length - 1)
              }
            }}
          >
            <ChevronLeftIcon
              className="h-16 w-16 text-gray-300 hover:text-gray-100"
              aria-hidden="true"
            />
          </button>
          {/* END LEFT ARROW */}

          {/* REVIEW */}
          <blockquote className="my-auto">
            <div>
              <svg
                className="h-12 w-12 text-white opacity-25"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-6 text-lg md:text-xl lg:text-2xl font-medium text-white">
                {data.testimonials[reviewIndex].text}
              </p>
              <div className="flex mt-8">
                <div className="flex-shrink-0">
                  <StarIcon
                    className="h-8 w-8 text-yellow-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-shrink-0">
                  <StarIcon
                    className="h-8 w-8 text-yellow-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-shrink-0">
                  <StarIcon
                    className="h-8 w-8 text-yellow-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-shrink-0">
                  <StarIcon
                    className="h-8 w-8 text-yellow-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-shrink-0">
                  <StarIcon
                    className="h-8 w-8 text-yellow-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <footer className="mt-6">
              <p className="text-base font-medium text-white">
                {data.testimonials[reviewIndex].authorName}
              </p>
              <p className="text-base font-medium text-indigo-100">
                {data.testimonials[reviewIndex].whenPosted}
              </p>
            </footer>
          </blockquote>
          {/* END REVIEW */}

          {/* RIGHT ARROW */}
          <button
            className="flex-shrink-0 hidden sm:flex sm:ml-8 items-center cursor-pointer"
            onClick={() => {
              if (reviewIndex < data.testimonials.length - 1) {
                setReviewIndex(reviewIndex + 1)
              } else {
                setReviewIndex(0)
              }
            }}
          >
            <ChevronRightIcon
              className="h-16 w-16 text-gray-200 hover:text-white"
              aria-hidden="true"
            />
          </button>
          {/* END RIGHT ARROW */}
        </div>
        {/* MOBILE ARROWS */}
        <div className="sm:hidden cursor-pointer flex justify-between items-center mt-12 px-2">
          <button
            onClick={() => {
              if (reviewIndex < data.testimonials.length - 1) {
                setReviewIndex(reviewIndex + 1)
              } else {
                setReviewIndex(0)
              }
            }}
          >
            <ChevronLeftIcon
              className="h-16 w-16 text-gray-200 hover:text-white text-left"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => {
              if (reviewIndex < data.testimonials.length - 1) {
                setReviewIndex(reviewIndex + 1)
              } else {
                setReviewIndex(0)
              }
            }}
          >
            <ChevronRightIcon
              className="h-16 w-16 text-gray-200 hover:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        {/* END MOBILE ARROWS */}
      </div>
    </Section>
  )
}

export default Testimonials
