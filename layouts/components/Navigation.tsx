import Link from 'next/link';
import { useState } from 'react';

import { HeaderNavigation } from '../../utils/md-types';

interface NavigationProps {
  navigation: HeaderNavigation[];
}

const Navigation: React.VFC<NavigationProps> = ({ navigation }) => {
  const [navListVisible, setNavListVisible] = useState(false);

  function hamburgerClick() {
    setNavListVisible(true);
    //document.body.style.overflow = "hidden"
  }

  function closeClick() {
    setNavListVisible(false);
    //document.body.style.overflow = "unset"
  }

  return (
    <nav className="bg-blue-200">
      <button onClick={hamburgerClick} id="hamburger">
        <span>
          <i>&#9776;</i>
        </span>
      </button>
      <ul className={`navigation__list ${!navListVisible && 'hidden'}`}>
        <li>
          <button onClick={closeClick} id="close">
            <span>
              <i>&#10005;</i>
            </span>
          </button>
        </li>

        {navigation.map((item, index) => (
          <li key={index} className="parent-nav">
            <Link href={`/${item.path! || item.href!}`}>
              <a className="navigation__links">
                {item.name} {item.children?.length ? <span>&#9662;</span> : ''}
              </a>
            </Link>
            {item.children?.length && (
              <ul className="navigation__list navigation__list--secondary">
                {item.children.map((subItem, index) => (
                  <li key={index}>
                    <Link href={subItem.nested ? `/${item.path! || item.href!}/${subItem.path! || subItem.href!}` : `/${subItem.path! || subItem.href!}`}>
                      <a className="navigation__links">{subItem.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
