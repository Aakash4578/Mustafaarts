import React, { useEffect } from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Portfolio from './Components/Portfolio';
import FeedBack from './Components/FeedBack';
import Whychoose from './Components/Whychoose';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page always starts at top
  }, []);
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
      <Header />
      <MainSection />
      <Portfolio />
      <FeedBack />
      <Whychoose />
      <Contactus />
      <Footer />
      <BackToTop />
    </>
  );
}



export default App;
