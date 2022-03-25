import Link from 'next/link';

import Navigation from './Navigation';

import { attributes as navigation } from '../../content/settings/navigation.md';
import { Navigation as INavigation } from '../../utils/md-types';

const Header = () => {
  const { headerNavigation } = navigation as INavigation;

  return (
    <header className="bg-[rgba(0,0,0,.85)] relative h-24">
      <Link href="/">
        <a className="hidden md:block">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </a>
      </Link>
      <Link href="/">
        <a className="md:hidden">
          <img src="/assets/logos/botanicals-logo-mobile.png" alt="botanicals logo" />
        </a>
      </Link>
      <Navigation navigation={headerNavigation} />
    </header>
  );
};

export default Header;
