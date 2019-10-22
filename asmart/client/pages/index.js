import React from 'react';
import Header from '../components/layouts/header/header';
import Footer from '../components/layouts/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSlider from '../components/layouts/HomeSlider/HomeSlider';
import ServiceBlock from '../components/layouts/ServiceBlock/ServiceBlock';
import PromoBlock from '../components/layouts/PromoBlock/PromoBlock';
import AdvantagesBlock from '../components/layouts/AdvantagesBlock/AdvantagesBlock';
import CertsBlock from '../components/layouts/CertsBlock/CertsBlock';
import InfoBlock from '../components/layouts/InfoBlock/InfoBlock';
import SchemaBlock from '../components/layouts/SchemaBlock/SchemaBlock';
import NewsBlock from '../components/layouts/NewsBlock/NewsBlock';
import ReviewsBlock from '../components/layouts/ReviewsBlock/ReviewsBlock';
import CollaborationBlock from '../components/layouts/CollaborationBlock/CollaborationBlock';
import FeedbackBlock from '../components/layouts/FeedbackBlock/FeedbackBlock';
import MapBlock from '../components/layouts/MapBlock/MapBlock';

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
        <SchemaBlock/>
        <NewsBlock/>
        <ReviewsBlock/>
        <CollaborationBlock/>
        <FeedbackBlock/>
        <MapBlock/>
        <Footer/>
    </>
);

export default Home
