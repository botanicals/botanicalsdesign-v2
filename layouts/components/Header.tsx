import Link from 'next/link';

import Navigation from './Navigation';

import { attributes as navigation } from '../../content/settings/navigation.md';
import { Navigation as INavigation } from '../../utils/md-types';

const Header = () => {
  const { headerNavigation } = navigation as INavigation;

  return (
    <header className="header">
      <Link href="/">
        <a className="header__logo header__logo--desktop">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </a>
      </Link>
      <Link href="/">
        <a className="header__logo header__logo--mobile">
          <img className="header__logo--mobile-image" src="/assets/logos/botanicals-logo-mobile.png" alt="botanicals logo" />
        </a>
      </Link>
      <Navigation navigation={headerNavigation} />
    </header>
  );
};

export default Header;
