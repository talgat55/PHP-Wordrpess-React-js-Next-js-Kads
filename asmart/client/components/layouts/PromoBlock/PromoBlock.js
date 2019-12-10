import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import './style.sass';
import {getLastPromo} from '../../api/promo/promo';
import ctx from 'classnames';

// import SliderItem from "./SliderItem";

class PromoBlock extends React.Component {
        state = {
            items: [],
            activeElement: ''
        };



    componentDidMount() {
        let currentComponent = this;
        const lasts = getLastPromo();
        lasts.then((resolve) => {
            currentComponent.setState({items: resolve});
        });
        // this.setState({items: getLastPromo()});

    }
    //
    // Add active class for hover element
    //
    ChangeActiveClass = e => {

        this.setState({
            activeElement: e
        })
    };
    //
    //  Delete active class
    //

    ClearActiveClass = () =>{
        this.setState({
            activeElement: ''
        })
    };

    render() {

        const {
            items,
            activeElement
        } = this.state;

        return (

            <section className={ctx( 'promo-block' , {[`active-${activeElement}`]: true})}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="sub-title">
                                Акции
                            </h2>
                        </Col>
                        <Col lg="6" md="12">
                            <ul className="promo-list row w-100">
                                {

                                    items.map((item , index) => (
                                    <li
                                        key={item.id}
                                        className={`item  item-${index} `}
                                        onMouseOver={  () => this.ChangeActiveClass(index)}
                                        onMouseOut={this.ClearActiveClass}
                                    >
                                        <a href="#" className="link">
                                            {item.title.rendered}
                                            <span className="w-100">
                                                {item.acf.slug}
                                            </span>
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </Col>
                        <Col lg="6" md="12">
                            <ul className="promo-list-shapes row w-100 ">
                                {items.map((item, index) => (
                                    <li id={`hover-${index}`} key={item.id} className="item">
                                        <p>{item.acf.percent_sale} %</p>
                                    </li>
                                ))}
                                <li className="item last">
                                    <img src="/static/promo-last.png" alt="Изображение"/>
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