import { useState } from 'react';
import Link from 'next/link';

import { XIcon } from '@heroicons/react/outline';

import { attributes as global } from '../../content/settings/global.md';

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }

  const { siteBanner } = global;

  return (
    <div className="top-notification-banner">
      <p>
        {siteBanner.longText}{' '}
        {siteBanner.link.external ? (
          <a href={siteBanner.link.href}>{siteBanner.link.text}</a>
        ) : (
          <Link href={siteBanner.link.href}>
            <a>{siteBanner.link.text}</a>
          </Link>
        )}
      </p>
    </div>
  );
};

export default Banner;
