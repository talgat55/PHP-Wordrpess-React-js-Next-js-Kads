import React from 'react';
import axios from "axios";
import {Col, Container, Row} from 'reactstrap';
import ServiceItem from './ServiceItem';
import './style.sass';
import packageMain from '../../../package';
// import SliderItem from "./SliderItem";

class ServiceBlock extends React.Component {
    state = {
        items: []
    };

    componentDidMount() {
        let currentComponent = this;
        //   acf api    http://localhost:6080/wp-json/acf/v3/slider
        axios.get(`${packageMain.proxy}/wp-json/wp/v2/services`)
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
        return (
            <section className="service-block">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sub-title">
                                Наши услуги
                            </h2>
                            <ul className="service-list row w-100 ">
                                {items.map(item => (
                                    <ServiceItem
                                        key={item.id}
                                        title={item.title.rendered}
                                        link={item.link}
                                        image={ item.acf.image}
                                    />
                                ))}
                            </ul>
                            <div className="w-100">
                                <a href="#" className="link-to-page">
                                    Все услуги
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default ServiceBlock;