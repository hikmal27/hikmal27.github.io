import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Discussion from '../img/discussion.jpg';

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="container my-16">
      <div className="lg:w-4/5 mx-auto text-center lg:text-left">
        <div>
          <p className="text-4xl lg:text-5xl font-extrabold" data-aos="slide-up">Resume</p>
        </div>
        <div className="mt-12 lg:flex lg:justify-between" data-aos="fade-right">
          <div className="w-72 mx-auto lg:mx-0">
            <p className="text-2xl font-bold lg:text-2xl">Education</p>
            <div className="mt-6">
              <p className="text-xl lg:text-xl font-semibold">SMK Negeri 1 Cipanas</p>
              <p className="lg:text-lg">Teknik Komputer Jaringan</p>
              <p className="lg:text-lg">2018 - 2019</p>
            </div>
            <div className="mt-6">
              <p className="text-xl lg:text-xl font-semibold">SMP Negeri 1 Cipanas</p>
              <p className="lg:text-lg">2016 - 2017</p>
            </div>
            <div className="mt-6">
              <p className="text-xl lg:text-xl font-semibold">SD Negeri 1 Sipayung</p>
              <p className="lg:text-lg">2011 - 2012</p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 w-72 mx-auto lg:mx-0" data-aos="fade-up">
            <p className="text-2xl lg:text-2xl font-bold">Online Course</p>
            <div className="mt-6">
              <p className="text-xl lg:text-xl font-semibold">Dicoding Indonesia</p>
              <p className="font-semibold lg:text-lg">Junior Web Development</p>
              <p className="lg:text-lg">July 2020 - August 2020</p>
            </div>
            <div className="mt-6">
              <p className="text-xl lg:text-xl font-semibold">Digitalent Schoolarship</p>
              <p className="font-semibold lg:text-lg">Google Digital Enterpreneurship</p>
              <p className="lg:text-lg">August 2020 - September 2020</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5" data-aos="zoom-in">
            <img className="bg-auto bg-no-repeat bg-center" src={Discussion} alt="Foto"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;