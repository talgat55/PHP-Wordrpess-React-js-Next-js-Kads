import React from 'react';
import Header from '../components/layouts/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSlider  from '../components/layouts/HomeSlider/HomeSlider';
import ServiceBlock from  '../components/layouts/ServiceBlock/ServiceBlock';
import './main.sass';
const Home = () => (
  <>
      <Header/>
      <HomeSlider/>
      <ServiceBlock/>
     home page
  </>
);

export default Home
