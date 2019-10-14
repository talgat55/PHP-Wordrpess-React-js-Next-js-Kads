import React from 'react';
import axios from "axios";
import {Col, Container, Row} from 'reactstrap';
import './style.sass';
import ServiceItem from "../ServiceBlock/ServiceItem";

// import SliderItem from "./SliderItem";

class PromoBlock extends React.Component {
    state = {
        items: []
    };

    componentDidMount() {
        let currentComponent = this;
        //   acf api    http://localhost:6080/wp-json/acf/v3/slider
        axios.get('http://localhost:6080/wp-json/wp/v2/promo')
            .then(function (response) {
                console.log(response.data);
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
        return (
            <section className="promo-block">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="sub-title">
                                Акции
                            </h2>
                        </Col>
                        <Col lg="6" md="12">
                            <ul className="promo-list row w-100 ">
                                {items.map(item => (
                                    <li key={item.key} className="item">
                                        <a href={item.link} className="link">
                                            {item.title.rendered}
                                            <span className="w-100">
                                                { item.acf.slug}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col lg="6" md="12">

                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}

export default PromoBlock;