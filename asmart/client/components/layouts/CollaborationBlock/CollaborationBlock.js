import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './style.sass';

const CollaborationBlock = () => {
    const items = [
        {
            id: '1',
            title: 'Строительные компании'
        },
        {
            id: '2',
            title: 'Проектные организации'
        }
        ,
        {
            id: '3',
            title: 'Подрядные организации'
        }
        ,
        {
            id: '4',
            title: 'Юристы'
        }
        ,
        {
            id: '5',
            title: 'Заказчики, застройщики объектов'
        },
        {
            id: '6',
            title: 'Риэлторы'
        }
    ];
    return (
        <section  id="collaboration" className="collaboration-block">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="sub-title">
                            Cотрудничество
                        </h2>
                    </Col>
                    <Col md="12">
                        <ul className="collaboration-list row justify-content-between ">
                            {items.map(item => (
                                <li key={item.id} className="item col-lg-6 col-sm-12  d-flex align-items-center">
                                    <div className="img-block">
                                        <img src={`/static/collaboration${item.id}.png`} alt="иконка"/>
                                    </div>
                                    <h3 className="title">
                                        {item.title}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default CollaborationBlock;