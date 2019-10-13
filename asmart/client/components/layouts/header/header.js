import React from 'react';
import Head from 'next/head';
import Navigation from '../../navigation/nav';
import {Col, Container, Row} from 'reactstrap';
import "./style.sass";

const Header = () => {
    return (
        <>
            <Head>
                <title>Главная</title>
                <link rel='icon' href='/static/favicon.ico'/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap&subset=cyrillic"
                    rel="stylesheet"/>
            </Head>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <a href="/" className="logo">
                                <img src="/static/logo.png" alt="логотип"/>
                            </a>
                        </Col>
                        <Col>
                            <div className="top d-flex justify-content-end  align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="img-block">
                                        <img src="/static/phone.png" alt="иконка"/>
                                    </div>
                                    <a className="phone-link" href="tel:+7(3812) 35-35-75">
                                        (3812) 35-35-75
                                    </a>
                                </div>
                                <div>
                                    <a className="feedback-link" href="#">
                                        Заказать звонок
                                    </a>
                                </div>
                            </div>
                            <div className="bottom">
                                <Navigation/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

        </>
    );
};

export default Header


