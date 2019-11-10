import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import './style.sass';
import {getLastPromo} from '../../api/promo/promo';
// import SliderItem from "./SliderItem";

class PromoBlock extends React.Component {
    state = {
        items: []
    };

    componentDidMount() {
        let currentComponent = this;
        const lasts =   getLastPromo();
        lasts.then((resolve) =>{
            currentComponent.setState({items: resolve});
        });
         // this.setState({items: getLastPromo()});

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
                                    <li key={item.id} className="item">
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
                            <ul className="promo-list-shapes row w-100 ">
                                {items.map(item => (
                                    <li key={item.id} className="item">
                                        <p>{item.acf.percent_sale} %</p>
                                    </li>
                                ))}
                                <li   className="item last">
                                        <img src="/static/promo-last.png" alt="Изображение" />
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}

export default PromoBlock;