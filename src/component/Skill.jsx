import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Bussines from '../img/bussines.jpg';


const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="lg:w-4/5 mx-auto my-12 text-center lg:text-left">
      <div className="lg:flex lg:justify-between">
        <div className="w-72 hidden lg:block lg:w-2/5" data-aos="zoom-in">
          <img className="bg-auto bg-no-repeat bg-center" src={Bussines} alt="Foto"/>
        </div>
        <div className="w-72 mx-auto lg:mx-0">
          <p className="text-4xl lg:text-5xl font-extrabold mb-12" data-aos="slide-up">Skills</p>
          <div className="lg:flex">
            <div className="w-72 mx-auto lg:mx-0" data-aos="slide-up">
              <p className="text-2xl font-bold mb-6">Design</p>
              <div>
                <p className="text-xl lg:text-lg mt-2">Photoshop</p>
                <p className="text-xl lg:text-lg mt-2">Adobe Illustrator</p>
              </div>
            </div>
            <div className="w-72 mx-auto lg:mx-0 mt-12 lg:mt-0" data-aos="slide-up">
              <p className="text-2xl font-bold mb-6">Development</p>
              <div>
                <p className="text-xl lg:text-lg mt-2">React JS</p>
                <p className="text-xl lg:text-lg mt-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-4xl lg:text-5xl font-extrabold mb-12 mt-12 lg:mt-0" data-aos="slide-up">Soft Skills</p>
            <div data-aos="slide-up">
              <p className="text-xl lg:text-lg mt-2">Communication Skills</p>
              <p className="text-xl lg:text-lg mt-2">Time Management</p>
              <p className="text-xl lg:text-lg mt-2">Able to Accept Criticism</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;