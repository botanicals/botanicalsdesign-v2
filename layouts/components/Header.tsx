// import Link from 'next/link';

// import { attributes as global } from '../../content/settings/global.md';
import { attributes as navigation } from '../../content/settings/navigation.md';

const Header = () => {
  // const { siteTitle } = global;
  const { headerNavigation } = navigation;

  return <header>{JSON.stringify(headerNavigation)}</header>;
};

export default Header;
