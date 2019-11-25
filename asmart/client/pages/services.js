import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import NewsList from "../components/layouts/NewsPage/NewsList";
import {getServicesForPage} from '../components/api/service/service';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import {Col, Container, Row} from "reactstrap";
import ServiceItem from "../components/layouts/ServiceBlock/ServiceItem";

const Blog = ({posts}) => {
    const titlePage = 'Услуги';
    let listBread = [{'href': 'services', 'title': titlePage}];
    return (
        <>
            <Header title={titlePage}/>
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={titlePage} main="true" className="sub-title single-post"/>
            </Hero>
            <section className="service-block">
                <Container>
                    <Row>
                        <Col>
                            <ul className="service-list row w-100 ">
                                {posts.map(item => (
                                    <ServiceItem
                                        key={item.id}
                                        title={item.title.rendered}
                                        link={item.slug}
                                        image={ item.acf.image}
                                    />
                                ))}
                            </ul>
                            <div className="w-100">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    )
};

Blog.getInitialProps = async () => {
    const posts = await getServicesForPage();
    return {posts: posts};
};
export default Blog;