import React from "react"

const DetailsUnit = ({ icon, heading, children }) => {
  return (
    <div className="pt-2 pb-6 text-gray-500">
      <div className="flex border-t-2 border-b-2 border-gray-100 py-2">
        <div className="flex-shrink-0">
          <icon.icon className="h-6 w-6 text-gray-500" aria-hidden="true" />
        </div>
        <div className="ml-3 text-l uppercase font-semibold text-gray-500">
          <h5>{heading}</h5>
        </div>
      </div>

      <div className="mt-6 text-gray-700">{children}</div>
    </div>
  )
}

export default DetailsUnit
