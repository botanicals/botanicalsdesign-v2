import Link from 'next/link';

import Navigation from './Navigation';

// import { attributes as global } from '../../content/settings/global.md';
// import { attributes as navigation } from '../../content/settings/navigation.md';

const Header = () => {
  // const { siteTitle } = global;
  // const { headerNavigation } = navigation;

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
      <Navigation />
    </header>
  );
};

export default Header;
