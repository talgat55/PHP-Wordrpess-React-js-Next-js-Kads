import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import NewsList from "../components/layouts/NewsPage/NewsList";
import {getPostForPage, getCountPosts} from '../components/api/posts/posts';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import PaginationWrap from '../components/elements/PaginationWrap';

class Blog   extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    render() {
            const {
                posts,
                count
            } = this.props;

        const titlePage = 'Новости';
        let listBread = [{'href': 'blog', 'title': titlePage}];
        return (
            <div id="main-wrap" className="main-wrap blog-page">
                {  console.log(count / 12)}
                <Header title={titlePage}/>
                <Hero
                    breadscrumb={<Breadcrumb items={listBread}/>}
                    img="/static/hero-news.jpg"
                >
                    <Title title={titlePage} main="true" className="sub-title single-post"/>
                </Hero>
                {
                    Array.isArray(posts) ?  (<NewsList posts={posts}/>) : ''
                }

                <PaginationWrap
                    page={this.props.page}
                    pathname={this.props.pathname}
                    maxcount={count}
                />
                <Footer/>
            </div>
        )
    }

};

Blog.getInitialProps = async ({ query: { page = 1 },pathname }) => {
    const posts = await getPostForPage(page);
    const count = await getCountPosts();
    return {
        posts: posts,
        count: count.publish,
        page: parseInt(page),
        pathname: pathname
    };

};
export default Blog;