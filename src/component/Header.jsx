import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Foto from '../img/foto.png';
import Typing from './Typing';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="header-box">
      <div className=" w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-auto mx-auto my-6" >
        <img className="bg-auto bg-no-repeat bg-center" src={Foto} alt="Foto"/>
      </div>
      <div className="text-center">
        <Typing dataText={["i'm Hikmal","i'm a programmer","i'm a developer"]}/>
      </div>
      <div className="text-4xl lg:text-5xl font-extrabold text-center my-8 " data-aos="slide-up">
        <p>Building digital</p>
        <p>web developer, learn and</p>
        <p>experience</p>
      </div>
      <div className="text-sm lg:text-xl text-center leading-snug" data-aos="fade-right">
        <p>a <span className="font-bold"> Web Developer </span> and <span className="font-bold"> Web Designer </span> in SF,</p>
        <p>I specialize in UI/UX Design, Responsive Web Design,</p>
        <p>and Visual Development.</p>
      </div>
    </div>
  );
}

export default Header;