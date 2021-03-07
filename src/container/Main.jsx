import React, { Component } from 'react';
import Contact from '../component/Contact';
// import Footer from '../component/Footer';
import Header from '../component/Header';
import Resume from '../component/Resume';
import Sertifikat from '../component/Sertifikat';
import Skill from '../component/Skill';
import Sosmed from '../component/Sosmed';

class Main extends Component {
  render() {
    return (
      <div className="container font-quicksand">
        <Header />
        <Sosmed />
        <Resume />
        <Skill />
        <Sertifikat />
        <Contact/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;