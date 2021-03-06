import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import PromoItem from "../components/layouts/PromoBlock/PromoItem";
import {getPromo} from '../components/api/promo/promo';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import {Container, Row} from "reactstrap";
import FeedbackBlock from "../components/layouts/FeedbackBlock/FeedbackBlock";

const Promo = ({posts}) => {
    const title = 'Акции';
    let listBread = [{key: '2', 'href': '', 'title': title}];

    return (
        <>


            <Header title={title}/>
            <section className="page-promo">
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={title} main="true" className="sub-title single-post"/>
            </Hero>
                <Container>
                    <Row>
                        <ul className="promo-list d-flex align-items-center w-100">
                        {posts.map((item,index) => (
                            <PromoItem
                                key={index}
                                img={item.acf.image}
                                slogan={item.acf.slug}
                                title={item.title.rendered}
                                percent_value={item.acf.percent_sale}
                                description={item.content.rendered}
                            />
                        )) }
                        </ul>
                    </Row>
                </Container>
                <FeedbackBlock/>
            </section>
            <Footer/>
        </>
    )
};

Promo.getInitialProps = async () => {
    const posts = await getPromo();

    return {posts: posts};
};
export default Promo;