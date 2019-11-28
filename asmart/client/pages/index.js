import React from 'react';
import Header from '../components/layouts/header/header';
import Footer from '../components/layouts/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';


import HomeSlider from '../components/layouts/HomeSlider/HomeSlider';
import SchemaBlock from '../components/layouts/SchemaBlock/SchemaBlock';
import ReviewsBlock from '../components/layouts/ReviewsBlock/ReviewsBlock';
import CollaborationBlock from '../components/layouts/CollaborationBlock/CollaborationBlock';
import FeedbackBlock from '../components/layouts/FeedbackBlock/FeedbackBlock';
import MapBlock from '../components/layouts/MapBlock/MapBlock';

import './main.sass';

const ServiceBlock = dynamic(() => import('../components/layouts/ServiceBlock/ServiceBlock'));
const PromoBlock = dynamic(() => import('../components/layouts/PromoBlock/PromoBlock'));
const AdvantagesBlock = dynamic(() => import('../components/layouts/AdvantagesBlock/AdvantagesBlock'));
const CertsBlock = dynamic(() => import('../components/layouts/CertsBlock/CertsBlock'));
const InfoBlock = dynamic(() => import('../components/layouts/InfoBlock/InfoBlock'));
const NewsBlock = dynamic(() => import('../components/layouts/NewsBlock/NewsBlock'));

const Home = () => (
    <div id="main-wrap" className="main-wrap">
        <Header title="Главная"/>
        <HomeSlider/>
        <ServiceBlock/>
        <PromoBlock/>
        <AdvantagesBlock/>
        <CertsBlock/>
        <InfoBlock/>
        <SchemaBlock/>
        <NewsBlock title="Новости"/>
        <ReviewsBlock/>
        <CollaborationBlock/>
        <FeedbackBlock/>
        <MapBlock/>
        <Footer/>
    </div>
);

export default Home
