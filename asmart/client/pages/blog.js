import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import NewsList from "../components/layouts/NewsPage/NewsList";
import {getPosts} from '../components/api/posts/posts';

const Blog = ({posts}) => (
    <>
        <Header/>
        <NewsList posts={posts}/>
        <Footer/>
    </>
);

Blog.getInitialProps = async  () => {
    const posts =  await  getPosts();
    return { posts: posts };
};
export default Blog;