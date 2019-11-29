import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import NewsItem from './NewsItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.sass';
import {getLastNews} from '../../api/posts/posts';

class NewsBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: []
    };

    componentDidMount() {
        let currentComponent = this;
        const lasts = getLastNews();
        lasts.then((resolve) => {
            currentComponent.setState({items: resolve});
        });
    }

    render() {
        const {items} = this.state;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
        return (
            <section className="news-block">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sub-title">
                                {this.props.title}
                            </h2>
                            <Slider {...settings}>
                                {items.map(item => {
                                        return this.props.exclude ?
                                            (this.props.exclude != item.slug ?

                                                    (<NewsItem
                                                        key={item.id}
                                                        title={item.title.rendered}
                                                        link={item.slug}
                                                        image={item.acf.image}
                                                        anons={item.acf.anons}
                                                        date={item.date}
                                                    />)
                                                    :
                                                    ''
                                            )
                                            :
                                            (<NewsItem
                                                key={item.id}
                                                title={item.title.rendered}
                                                link={item.slug}
                                                image={item.acf.image}
                                                anons={item.acf.anons}
                                                date={item.date}
                                            />)
                                            ;

                                    }
                                )}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default NewsBlock;