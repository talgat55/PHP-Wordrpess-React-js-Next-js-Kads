import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./style.sass";
import {getCerts} from "../../api/certs/certs";

class CertsBlock extends React.Component {
    state = {
        items: [],
        current: ''
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getCerts();
        lasts.then((resolve) =>{
            currentComponent.setState({items: resolve});
        });

    }
    handleClickImage = (e, image) => {
        e && e.preventDefault();

        this.setState({
            current: image
        })
    };

    handleCloseModal = (e) => {
        e && e.preventDefault();

        this.setState({
            current: ''
        })
    };
    render() {
        const {items, current} = this.state;
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <section className="certs-block">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="sub-title">
                                Наши сертификаты
                            </h2>
                        </Col>
                        <Col md="12">
                            <Slider {...settings}>
                                {items.map(item => (
                                    <div key={item.id } className="item">
                                        <a href="#" onClick={ e => this.handleClickImage(e, item.acf.image)}  className="link">
                                            <img src={item.acf.image} alt="Сертификат" />
                                        </a>
                                    </div>
                                ))
                                }
                            </Slider>
                            {current &&
                            <Lightbox
                                mainSrc={current}
                                onCloseRequest={this.handleCloseModal}
                            />
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default CertsBlock;