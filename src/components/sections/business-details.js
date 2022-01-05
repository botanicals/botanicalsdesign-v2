import React from "react"

import {
  LocationMarkerIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/outline"

import Section from "../section"

import DetailsUnit from "../elements/details-unit"
import TextList from "../elements/text-list"

const BusinessDetails = ({ data, inColumn }) => {
  return (
    <Section customClassName={inColumn ? "w-full" : ""}>
      <div className="rounded-sm shadow-md mb-12 sm:w-3/4 lg:w-full">
        <iframe
          title={data.mapTitle}
          src={data.mapSource}
          width="100%"
          height="300px"
          className="rounded-sm"
          loading="lazy"
        ></iframe>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          <DetailsUnit heading="Address" icon={{ icon: LocationMarkerIcon }}>
            <TextList list={data.address} />
          </DetailsUnit>

          <DetailsUnit heading="Hours" icon={{ icon: ClockIcon }}>
            <TextList list={data.hours} />
          </DetailsUnit>

          <DetailsUnit heading="Phone" icon={{ icon: PhoneIcon }}>
            <p>
              <a
                className="text-blue hover:text-blue-dark"
                href={`tel:${data.phoneNumberUnformatted}`}
              >
                {data.phoneNumberFormatted}
              </a>
            </p>
          </DetailsUnit>
        </div>
      </div>
    </Section>
  )
}

export default BusinessDetails
