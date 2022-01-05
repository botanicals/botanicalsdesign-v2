import React from "react"
import { Link } from "gatsby"

function TopNotificationBanner() {
  return (
    <div className="top-notification-banner">
      <p>
        Botanicals has recently opened a new retail location in Kaysville, Utah!{" "}
        <Link to="/locations/kaysville">Visit the new page to learn more.</Link>
      </p>
    </div>
  )
}

export default TopNotificationBanner
