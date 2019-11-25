import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ReviewItem from './ReviewItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.sass';
import {getReviews} from "../../api/reviews/reviews";

class ReviewsBlock extends React.Component {
    state = {
        items: []
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts = getReviews();
        lasts.then((resolve) => {
            currentComponent.setState({items: resolve});
        });
    }
    render() {
        const {items} = this.state;
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <section className="reviews-block">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sub-title">
                                Отзывы
                            </h2>
                            <Slider {...settings}>
                                {items.map(item => (
                                    <ReviewItem
                                        key={item.id}
                                        title={item.title.rendered}
                                        text={item.content.rendered}
                                        date={item.date}
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

export default ReviewsBlock;