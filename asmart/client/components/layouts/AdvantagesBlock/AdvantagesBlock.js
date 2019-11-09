import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './style.sass';
const AdvantagesBlock = () => {
    const items = [
        {
            id: '1',
            title: 'Бесплатная консультация'
        },
        {
            id: '2',
            title: 'Индивидуальный подход  к каждому клиенту'
        }
        ,
        {
            id: '3',
            title: 'Многопрофильность. Охватываем  несколько  направлений'
        }
        ,
        {
            id: '4',
            title: 'Доступные цены и система скидок'
        }
        ,
        {
            id: '5',
            title: 'Работа “под ключ” Стоять в очередях и отвечать на непонятные вопросы:  все берем на себя!'
        }
    ];

    return (
        <section className="advantages-block">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="sub-title">
                            Наши преимущества
                        </h2>
                    </Col>
                    <Col md="12">
                        <ul className="advantages-list row justify-content-between ">
                            {items.map(item => (
                                <li key={item.id}  className="item text-center col  col-md-6 col-sm-12">
                                        <div className="img-block">
                                            <img src={`/static/advantages${item.id}.png`} alt="иконка" />
                                        </div>
                                    <h3 className="title">
                                        {item.title}
                                    </h3>
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
};

export default AdvantagesBlock;
