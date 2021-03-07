import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Images from '../img/foto-1.png';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=" my-20 text-lg">
      <div>
        <div>
          <p className="text-4xl lg:text-5xl font-extrabold text-center mb-10" data-aos="fade-right">Contact</p>
        </div>
        <div className="w-9/12 lg:w-3/5 flex flex-col lg:flex-row overflow-hidden mx-auto px-2 py-2 shadow-custom rounded-lg" data-aos="zoom-in">
          <img className="lg:w-96 bg-auto bg-no-repeat bg-center" src={Images} alt="Foto"/>
          <div className="ml-5 mt-3 lg:mt-0">
            <p className="font-extrabold text-xl lg:text-2xl">Hikmal Maulana Ramadhan</p>
            <p className="text-sm lg:text-xl">Web Developer | Front End</p>
            <table className="mt-10">
              <tr>
                <th className="text-left">AGE</th>
                <td className=" w-3 text-center">:</td>
                <td>19</td>
              </tr>
              <tr>
                <th className="text-left">RESIDENCE</th>
                <td className=" w-3 text-center">:</td>
                <td>Indonesia</td>
              </tr>
              <tr>
                <th className="text-left">PHONE</th>
                <td className=" w-3 text-center">:</td>
                <td>+62821-1092-8146</td>
              </tr>
              <tr>
                <th className="text-left">E-MAIL</th>
                <td className=" w-10 text-center">:</td>
                <td>monkh27@gmail.com</td>
              </tr>
            </table>
            <div className=" mt-20 mb-3">
              <p className="text-center font-mrDafoe font-extrabold text-xl">You Can't Do it</p>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;