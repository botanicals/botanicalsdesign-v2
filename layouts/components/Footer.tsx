// import Link from 'next/link';

import { attributes as navigation } from '../../content/settings/navigation.md';

const Footer = () => {
  const { footerNavigation } = navigation;

  return <footer>{JSON.stringify(footerNavigation)}</footer>;
};

export default Footer;
