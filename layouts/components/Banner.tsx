// import { useState } from 'react';
import Link from 'next/link';

// import { XIcon } from '@heroicons/react/outline';

import { attributes as global } from '../../content/settings/global.md';

const Banner = () => {
  // const [showBanner, setShowBanner] = useState(true);

  // if (!showBanner) {
  //   return null;
  // }

  // const { siteBanner } = global;

  return (
    <div className="top-notification-banner">
      <p>
        Botanicals has recently opened a new retail location in Kaysville, Utah!{' '}
        <Link href="/locations/kaysville">
          <a>Visit the new page to learn more.</a>
        </Link>
      </p>
    </div>
  );
};

export default Banner;
