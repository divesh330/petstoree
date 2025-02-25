import React from 'react';
//import next image
import Image from 'next/image';

import pretitleImg from'../public/img/hero/pretitle-img.svg';

import header from'./Header';
import Header from './Header';

const Hero = () => {
  return(

   <section className='bg-cream lg:bg-hero lg:bg-cover
  lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]'><Header />
  <div className='container mx-auto'>
    <div className='lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0'>
      {/*image */}
      <div className='hidden xl:flex mb-6 ml-5'>
        <Image src={pretitleImg} width={'100%'} height=
        {'auto'} alt=''    />
      </div>
      <hl className='text-5xl lg:text-8xl uppercase font-bold -tracking-[0.05em] mb-10'>
        A Pet first <br /> <span> approach to</span> <br /> wellness
      </hl>
      <button className='btn btn-orange mx-auto
      lg:mx-0'>
        Learn More
      </button>
    </div>
  </div>
  </section>
  );
};

export default Hero;
