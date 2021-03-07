import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Dicoding from '../img/dicoding.png';
import webDicoding from '../img/web-dicoding.png';
import Digitalent from '../img/digitalent.png';

const Sertifikat = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500
    })
  })

  // const modalStyle = {
  //   position: "fixed",
  //   top: "0",
  //   right: "0",
  //   bottom: "0",
  //   left: "0",
  //   backgroundColor: "rgba(0, 0, 0, 0.6)",
  //   zIndex: "999999"
  // };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  
  // let modal;
  // if(isModalOpen){
  //   modal = (
  //     <div style={modalStyle} className='modal'>
  //       <div className="mx-auto mt-40 lg:mt-10 w-custom lg:w-3/5">
  //         <img className="bg-auto bg-no-repeat bg-center" src={Dicoding} alt="Dicoding"/>
  //       </div>
  //       <div onClick={() => setIsModalOpen(!isModalOpen)} className="mt-5 w-20 mx-auto bg-green-500 text-center box-border rounded-lg cursor-pointer">
  //         <button className="text-lg font-extrabold py-1 text-gray-200 focus:outline-none">
  //           Tutup
  //         </button>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="my-24 lg:w-4/5 mx-auto">
      <div className="text-center font-extrabold text-4xl lg:text-5xl">
        <p data-aos="fade-right">Sertifikat</p>
      </div>

      <div className="px-3 py-4 box-border lg:flex flex-col lg:flex-row mt-12 lg:justify-between mx-auto lg:mx-0">
        {/* {modal} */}
        <div className="w-5/6 mx-auto lg:mx-0 px-2 py-2 shadow-custom rounded-lg lg:w-2/7 overflow-hidden cursor-pointer" data-aos="zoom-in">
          <img className="bg-auto bg-no-repeat bg-center" src={Dicoding} alt="Dicoding"/>
        </div>
        <div className="w-5/6 mx-auto lg:mx-0 px-2 py-2 shadow-custom rounded-lg lg:w-2/7 my-5 lg:my-0 cursor-pointer overflow-hidden" data-aos="zoom-in">
          <img className="bg-auto bg-no-repeat bg-center" src={webDicoding} alt="Dicoding"/>
        </div>
        <div className="w-5/6 mx-auto lg:mx-0 px-2 py-2 shadow-custom rounded-lg lg:w-2/7 cursor-pointer overflow-hidden" data-aos="zoom-in" >
          <img className="bg-auto bg-no-repeat bg-center" src={Digitalent} alt="Digitalent"/>
        </div>
      </div>
    </div>
  );
}

export default Sertifikat;