import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ServiceItem from './ServiceItem';
import './style.sass';
import {getServicesForBlock} from "../../api/service/service";
import ServiceLoaderWrap from '../../ContentLoaders/Service/ServiceWrap';
import FadeIn from "react-fade-in";

class ServiceBlock extends React.Component {
    state = {
        items: [],
        loading: true
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getServicesForBlock();
        lasts.then((resolve) =>{
            currentComponent.setState({
                items: resolve,
                loading: !this.state.loading,
            });
        });

    }

    render() {
        const {
            items,
            loading

        } = this.state;
        return (
            <section className="service-block">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sub-title">
                                Наши услуги
                            </h2>
                            {
                                loading ? (
                                    <ServiceLoaderWrap/>
                                )
                                    :
                                    (
                                        <FadeIn>
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
                                        </FadeIn>
                                    )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default ServiceBlock;