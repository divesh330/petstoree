import React from 'react';
import Image from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css';

import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

const services =[
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Medicines for Your pets!',
    btnText: 'Explore'
  },
  {
    image: Service2Icon,
    name :'Breed Haircuts',
    description : 'Haircuts for specific breeds of pets',
    btnText: 'Explore'
  },

  {
    image: Service3Icon,
    name: 'Pet Clothes',
    description: 'CLothes for your Furries!',
    btnText: 'Explore'

  },
]


const ServiceSlider = () => {
  return(

  <Swiper>
    {services.map((service, index) => {
      return <SwiperSlide key={index}>
        <Image src={service.image}/>
        <div>
          {service.name}
        </div>
        <div>
          {service.description}
        </div>
        <button className= 'btn btn-primary'>
          {service.btnText}
          </button>
      </SwiperSlide>;
    })}
  </Swiper>

   
    ); 
};

export default ServiceSlider;
