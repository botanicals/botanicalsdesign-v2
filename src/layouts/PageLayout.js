import React from 'react';

// import "../styles/main.scss"

import Header from '../components/Header';
import Footer from '../components/Footer';
import TopNotificationBanner from '../components/TopNotificationBanner';
import HeroPageBanner from '../components/HeroPageBanner';
import ContentContainer from '../components/ContentContainer';
import CtaBanner from '../components/CtaBanner';

import SEO from '../components/SEO';

function PageLayout(props) {
  return (
    <>
      <SEO config={props.seo} />
      <TopNotificationBanner />
      <Header />
      <HeroPageBanner
        heroImage={props.heroImage}
        mainHeading={props.mainHeading}
        subHeading={props.subHeading}
        ext={props.ext}
        link={props.link}
        altBanner={props.altBanner}
        altImage={props.altImage}
      />
      {props.cta ? <CtaBanner data={props.cta} /> : null}
      <ContentContainer pageHeading={props.pageHeading}>{props.children}</ContentContainer>
      <Footer />
    </>
  );
}

export default PageLayout;
