export type HeaderNavigation = {
  name: string;
  path?: string;
  href?: string;
  children: {
    name: string;
    path?: string;
    href?: string;
    nested: boolean;
  }[];
};

export interface Navigation {
  headerNavigation: HeaderNavigation[];
  footerNavigation: {
    name: string;
    groups: {
      name: string;
      children: {
        name: string;
        path?: string;
        href?: string;
      }[];
    }[];
  }[];
  footerLocations: {
    heading: string;
    locations: {
      name: string;
      href: string;
      address: string;
      email: {
        text: string;
        href: string;
      };
      phone: {
        text: string;
        href: string;
      };
      socials: {
        type: 'facebook' | 'instagram';
        href: string;
      }[];
    }[];
  };
}
