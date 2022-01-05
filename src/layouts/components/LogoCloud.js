import React from 'react';
import { Link } from 'gatsby';

const LogoCloud = () => {
  return (
    <div className="max-w-7xl bg-white mx-auto py-8 pt-12 px-8">
      <div className="border-t-2 border-b-2 border-blue-fade px-4 pb-8 relative">
        <div className="-mt-3 bg-white w-1/3 mx-auto">
          <p className="text-center text-xl text-blue font-semibold italic uppercase tracking-wide">The Botanicals Family of Businesses</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center p-2">
            <Link to="/">
              <img src="/images/logos/gibby-floral.png" alt="gibby floral" />
            </Link>
          </div>
          <div className="col-span-1 flex justify-center p-2">
            <a href="https://botanicalsdesign.com" target="_blank" rel="noreferrer">
              <img src="/images/logos/botanicals.png" alt="botanicals" />
            </a>
          </div>
          <div className="col-span-1 flex justify-center p-2">
            <a href="https://sandia-greenhouse.business.site" target="_blank" rel="noreferrer">
              <img src="/images/logos/sandia.png" alt="sandia" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
