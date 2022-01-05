import React from "react"

const FeatureBackground = ({ children }) => {
  return (
    <div className="relative sm:py-16 mt-24 sm:mt-0">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8">
        <div className="relative rounded-lg px-6 py-10 bg-blue-fade bg-opacity-40 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          {/* SVG */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-blue-fade text-opacity-20"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-blue-fade text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          {/* END SVG */}
          <div id="email" className="relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureBackground
