import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import NewsList from "../components/layouts/NewsPage/NewsList";
import {getPostForPage} from '../components/api/posts/posts';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";

const Blog = ({posts}) => {
    const titlePage = 'Новости';
    let listBread = [{'href': 'blog', 'title': titlePage}];
    return (
        <>
            <Header title={titlePage}/>
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={titlePage} main="true" className="sub-title single-post"/>
            </Hero>
            <NewsList posts={posts}/>
            <Footer/>
        </>
    )
};

Blog.getInitialProps = async () => {
    const posts = await getPostForPage();
    return {posts: posts};
};
export default Blog;