import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import FeedbackBlock from "../components/layouts/FeedbackBlock/FeedbackBlock";
import MapBlock from "../components/layouts/MapBlock/MapBlock";

const Contacts = () => {
    const title = 'Контакты';
    let listBread = [{'href': '', 'title': title}];
    return (
        <div id="main-wrap" className="main-wrap contact-page">
            <section className="contacts-page">
                <Header title={title}/>
                <Hero
                    breadscrumb={<Breadcrumb items={listBread}/>}
                    img="/static/hero-news.jpg"
                >
                    <Title title={title} main="true" className="sub-title single-post"/>
                </Hero>
                <MapBlock/>
                <FeedbackBlock/>
                <Footer/>
            </section>
        </div>
    )
};

export default Contacts;