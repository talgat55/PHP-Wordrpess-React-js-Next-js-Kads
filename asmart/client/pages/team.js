import React from 'react';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import TeamItem from "../components/layouts/TeamBlock/TeamItem";
import {getTeams} from '../components/api/team/team';
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
import {Container, Row} from "reactstrap";
import FeedbackBlock from "../components/layouts/FeedbackBlock/FeedbackBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/layouts/TeamBlock/style.sass";

const Team = ({posts}) => {
    const title = 'Наша команда';
    let listBread = [{'href': '', 'title': title}];
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <div id="main-wrap" className="main-wrap ">
            <Header title={title}/>
            <section className="page-team">
            <Hero
                breadscrumb={<Breadcrumb items={listBread}/>}
                img="/static/hero-news.jpg"
            >
                <Title title={title} main="true" className="sub-title single-post"/>
            </Hero>
                <Container>
                    <div className="team-wrap-row">

                        <Slider {...settings}>
                            {posts.map(item => (
                                <TeamItem
                                    key={item.id}
                                    title={item.title.rendered}
                                    photo={item.acf.photo}
                                    position={item.acf.position}
                                    icon_position={item.acf.icon_position}
                                />
                            ))}
                        </Slider>
                    </div>
                </Container>
                <FeedbackBlock/>
            </section>
            <Footer/>
        </div>
    )
};

Team.getInitialProps = async () => {
    const posts = await getTeams();
    return {posts: posts};
};
export default Team;