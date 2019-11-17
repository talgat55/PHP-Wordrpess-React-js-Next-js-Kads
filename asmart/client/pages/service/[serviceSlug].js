import Header from "../../components/layouts/header/header";
import Hero from "../../components/elements/Hero";
import Breadcrumb from "../../components/elements/Breadcrumbs";
import Title from "../../components/elements/Title";
import Footer from "../../components/layouts/footer/footer";
import ServiceStepItem from "../../components/layouts/ServiceBlock/ServiceStepItem";
import ServiceLastItem  from "../../components/layouts/ServiceBlock/ServiceLastItem";
import React from "react";
import {getServiceBySlug} from '../../components/api/service/service';
import {Container, Row} from "reactstrap";
import ReactHtmlParser from 'react-html-parser';
import "./service.sass";
import FeedbackBlock from "../../components/layouts/FeedbackBlock/FeedbackBlock";
import MapBlock from "../../components/layouts/MapBlock/MapBlock";

const ServicePost = ({post}) => {
    // Render post title and content in the page from props
    const item = post[0];
    console.log(post);
    let listBread = [{'href': '/service', 'title': 'Услуги'}, {'href': '', 'title': item.title.rendered}];

    let stylePart = {
        backgroundImage: `url(${item.acf.imageBgPart})`
    };
    let styleLast = {
        backgroundImage: `url(${item.acf.imageBgLast})`
    };

    return (
        <div className="service-single-page">
            <Header title={item.title.rendered}/>
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img={item.acf.imageDetail  ? item.acf.imageDetail  : '/static/hero-news.jpg'}
            >
                <Title title={item.title.rendered} main="true" className="sub-title single-post"/>
            </Hero>
            <section className="description">
                <Container>
                    <Row>
                        <div className="content">
                            {ReactHtmlParser(item.content.rendered)}
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="part-section">
                <Container>
                    <Row>
                        <div className="content"  style={stylePart}>
                            <div className="wrap position-relative">
                                {ReactHtmlParser(item.content.rendered)}
                            </div>

                        </div>
                    </Row>
                </Container>
            </section>
            <section className="steps-section">
                <Container>
                    <Row>
                        <div className="content w-100"  >
                             <h2 className="text-center">
                                 Этапы работы
                             </h2>
                            {
                                item.acf.steps && (
                                    <ul className="lists-steps d-flex justify-content-center">
                                        {
                                            item.acf.steps.map( (item, index) => (
                                                <ServiceStepItem
                                                    key={index}
                                                    counter={index}
                                                    title={item.title}
                                                />
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="last-section" style={styleLast}>
                <Container>
                    <Row>
                        <div className="content w-100 position-relative"  >
                            <h3 className="text-center">
                                { item.acf.last_title}
                            </h3>
                            {
                                item.acf.steps_last_blocks && (
                                    <ul className="lists-steps d-flex justify-content-center">
                                        {
                                            item.acf.steps_last_blocks.map( (item, index) => (
                                                <ServiceLastItem
                                                    key={index}
                                                    counter={index}
                                                    title={item.title}
                                                />
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    </Row>
                </Container>
            </section>
            <FeedbackBlock/>
            <MapBlock/>
            <Footer/>
        </div>
    )
};

ServicePost.getInitialProps = async (params) => {
    const post = await getServiceBySlug(params.query.serviceSlug);
    return {post: post};
};
export default ServicePost