import Seo, { Metadata } from './components/Seo';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero, { HeroProps } from './components/Hero';
import Footer from './components/Footer';

interface PageLayoutProps {
  hero: HeroProps;
  heading?: string;
  seo: Metadata;
}

const PageLayout: React.FC<PageLayoutProps> = ({ hero, heading, seo, children }) => {
  return (
    <>
      <Seo metadata={seo} />
      <div className="flex flex-col justify-between min-h-screen text-gray-800 bg-white">
        <div>
          <Banner />
          <Header />
          <Hero heading={hero.heading} subheading={hero.subheading} image={hero.image} cta={hero.cta} />
          <main className="pt-8 pb-4">
            {heading ? <h1 className="mx-auto heading text-primary-red max-w-[1600px] px-8">{heading}</h1> : null}
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
