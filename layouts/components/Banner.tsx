// import { useState } from 'react';
// import Link from 'next/link';

// import { XIcon } from '@heroicons/react/outline';

import { attributes as global } from '../../content/settings/global.md';

const Banner = () => {
  // const [showBanner, setShowBanner] = useState(true);

  // if (!showBanner) {
  //   return null;
  // }

  const { siteBanner } = global;

  return <div>{JSON.stringify(siteBanner)}</div>;
};

export default Banner;
