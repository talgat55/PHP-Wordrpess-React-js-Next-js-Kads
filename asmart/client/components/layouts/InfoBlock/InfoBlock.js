import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Title from '../../elements/Title';
import './style.sass';

const InfoBlock = () => {
    return (
        <section className="info-block">
            <Container>
                <Row>
                    <Col lg="12">
                        <Title title="Для юридических лиц" />
                    </Col>
                    <Col sm="6" className="item col-lg-4 col-md-6 col-xs-12">
                        <div className="item-wrap">
                            Помощь в оформлении земельных участков
                            и объектов капитального строительства
                        </div>
                    </Col>
                    <Col sm="6"  className="item col-lg-4 col-md-6 col-xs-12">
                        <div className="item-wrap">
                            Представление интересов в профильных
                            организациях
                        </div>
                    </Col>
                    <Col sm="6"  className="item col-lg-4 col-md-6 col-xs-12">
                        <div className="item-wrap">
                            Выезд на объект в удобное для Вас время.
                            Анализ документов. Определение этапов
                            работ, сроков и стоимости
                        </div>
                    </Col>
                    <Col sm="12">
                        <a href="#" className="link-alt">
                            Оформить заявку
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InfoBlock;