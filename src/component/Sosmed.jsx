import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RiFacebookFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BrowserRouter, Link } from 'react-router-dom';

const Sosmed = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <BrowserRouter>
      <div className="lg:w-4/5 mx-auto items-center mt-5">
        <div className="flex justify-center">
          <Link to="">
            <div className="w-10 h-10 flex bg-blue-400 rounded-full" data-aos="zoom-in">
              <RiFacebookFill className="text-2xl text-white my-auto mx-auto" />
            </div>
          </Link>
          <Link to="">
            <div className="w-10 h-10 flex bg-blue-400 rounded-full mx-3" data-aos="zoom-in">
              <AiFillInstagram className="text-2xl text-white my-auto mx-auto" />
            </div>
          </Link>
          <Link to="">
            <div className="w-10 h-10 flex bg-blue-400 rounded-full" data-aos="zoom-in">
              <AiFillGithub className="text-2xl text-white my-auto mx-auto" />
            </div>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Sosmed;