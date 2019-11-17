import Header from "../../components/layouts/header/header";
import Hero from "../../components/elements/Hero";
import Breadcrumb from "../../components/elements/Breadcrumbs";
import Title from "../../components/elements/Title";
import Footer from "../../components/layouts/footer/footer";
import React from "react";
import {getPostBySlug, getLastNews} from '../../components/api/posts/posts';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {Container, Row} from "reactstrap";
import ReactHtmlParser  from 'react-html-parser';
import "./blog.sass";
import FeedbackBlock from "../../components/layouts/FeedbackBlock/FeedbackBlock";
import NewsBlock from "../../components/layouts/NewsBlock/NewsBlock";
const Post = ({post, lasts}) => {
    // Render post title and content in the page from props
    const  item =  post[0];
    console.log(post);
    let listBread = [{'href': '/blog', 'title': 'Новости' } , { 'href' : '','title' : item.title.rendered}];

    return (
        <div className="post-single-page">
            <Header title={item.title.rendered}/>
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={item.title.rendered} main="true"   className="sub-title single-post"/>
            </Hero>
            <section className="single-post">
                <Container>
                    <Row>
                        <div className="date-block d-flex align-items-center w-100">
                            <img src="/static/date.png" alt="иконка" />
                            { dayjs(item.modified).locale('ru').format('d MMMM YYYY') }
                        </div>
                        <div className="content">
                            {ReactHtmlParser(item.content.rendered)}
                        </div>
                        <div className="last-news-block">

                        </div>
                        <NewsBlock title="Последние новости"/>
                    </Row>
                </Container>
                <FeedbackBlock/>
            </section>

            <Footer/>
        </div>
    )
};

Post.getInitialProps = async (params) => {
    const post = await getPostBySlug(params.query.blogSlug);
    const lasts = await getLastNews();
    return {post: post , lasts: lasts};
};
export default Post