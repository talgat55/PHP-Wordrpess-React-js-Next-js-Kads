import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import NewsList from "../components/layouts/NewsPage/NewsList";
import {getPosts} from '../components/api/posts/posts';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";

const Blog = ({posts}) => {
    let listBread = [{'href': 'blog', 'title': 'Новости'}];
    return (
        <>
            <Header/>
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title="Новости"/>
            </Hero>
            <NewsList posts={posts}/>
            <Footer/>
        </>
    )
};

Blog.getInitialProps = async () => {
    const posts = await getPosts();
    return {posts: posts};
};
export default Blog;