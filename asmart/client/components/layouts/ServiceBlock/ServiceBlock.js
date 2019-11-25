import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ServiceItem from './ServiceItem';
import './style.sass';
import {getServicesForBlock} from "../../api/service/service";

class ServiceBlock extends React.Component {
    state = {
        items: []
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getServicesForBlock();
        lasts.then((resolve) =>{
            currentComponent.setState({items: resolve});
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
                                        link={item.slug}
                                        image={ item.acf.image}
                                    />
                                ))}
                            </ul>
                            <div className="w-100">
                                <a href="/services" className="link-to-page">
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