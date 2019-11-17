import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import {getServices} from "../components/api/service/service";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import {Container, Row} from "reactstrap";
import FeedbackBlock from "../components/layouts/FeedbackBlock/FeedbackBlock";
import "../components/layouts/TeamBlock/style.sass";

const Service = ({posts}) => {
    const title = 'Услуги';
    let listBread = [{'href': '', 'title': title}];

    return (
        <>

            <Header title={title}/>
            <section className="page-team">
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={title} main="true" className="sub-title single-post"/>
            </Hero>
                <Container>
                    <div className="service-wrap-row">


                    </div>
                </Container>
                <FeedbackBlock/>
            </section>
            <Footer/>
        </>
    )
};

Service.getInitialProps = async () => {
    const posts = await getServices();
    return {posts: posts};
};

export default Service;