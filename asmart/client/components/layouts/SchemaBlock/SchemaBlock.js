import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './style.sass';
import ReactHtmlParser  from 'react-html-parser';
const SchemaBlock = () => {
    const items = [
        {
            id: '1',
            title: 'Заявка'
        },
        {
            id: '2',
            title: 'Сбор и анализ<br>  документов'
        }
        ,
        {
            id: '3',
            title: 'Подготовка пакета<br> документов'
        }
        ,
        {
            id: '4',
            title: 'выдача готового пакета  документов на руки для сдачи  в регистрирующий орган'
        }
        ,
        {
            id: '5',
            title: 'Подача документов  в регистрирующий орган'
        }
        ,
        {
            id: '6',
            title: 'Результат'
        }

    ];

    return (
        <section className="schema-block">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="sub-title">
                            Схема работы
                        </h2>
                    </Col>
                    <Col md="12">
                        <ul className="schema-list row justify-content-between ">
                            {items.map(item => (
                                <li key={item.id} className="item">
                                    <div className="img-block text-center">
                                        <img src={`/static/schema${item.id}.png`} alt="иконка"/>
                                    </div>
                                    <h3 className="title">
                                        {ReactHtmlParser(item.title)}
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

export default SchemaBlock;
