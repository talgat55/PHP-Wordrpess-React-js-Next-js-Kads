import React from 'react';
import axios from "axios";
import {Col, Container, Row} from 'reactstrap';
import NewsItem from './NewsItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.sass';
import packageMain from '../../../package';
// import SliderItem from "./SliderItem";

class NewsBlock extends React.Component {
    state = {
        items: []
    };

    componentDidMount() {
        let currentComponent = this;
        axios.get(`${packageMain.proxy}/wp-json/wp/v2/posts`)
            .then(function (response) {
                // console.log(response.data);
                currentComponent.setState({items: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    render() {
        const {items} = this.state;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <section className="news-block">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sub-title">
                                Новости
                            </h2>
                                <Slider {...settings}>
                                    {items.map(item => (
                                        <NewsItem
                                            key={item.id}
                                            title={item.title.rendered}
                                            link={item.link}
                                            image={ item.acf.image}
                                            anons={ item.acf.anons}
                                            date={ item.date}
                                        />
                                    ))}
                                </Slider>

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default NewsBlock;