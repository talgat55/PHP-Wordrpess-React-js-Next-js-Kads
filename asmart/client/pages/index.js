import React from 'react';
import Header from '../components/layouts/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSlider  from '../components/layouts/HomeSlider/HomeSlider';
import ServiceBlock from  '../components/layouts/ServiceBlock/ServiceBlock';
import PromoBlock from  '../components/layouts/PromoBlock/PromoBlock';
import AdvantagesBlock from  '../components/layouts/AdvantagesBlock/AdvantagesBlock';
import CertsBlock from  '../components/layouts/CertsBlock/CertsBlock';
import InfoBlock from  '../components/layouts/InfoBlock/InfoBlock';
import './main.sass';
const Home = () => (
  <>
      <Header/>
      <HomeSlider/>
      <ServiceBlock/>
      <PromoBlock/>
      <AdvantagesBlock/>
      <CertsBlock/>
      <InfoBlock/>
     home page
  </>
);

export default Home
