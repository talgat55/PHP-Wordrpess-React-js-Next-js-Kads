import React from 'react';
import Head from 'next/head';
import Navigation from '../../navigation/nav';
import Logo from '../../elements/logo-block';
import PhoneBlock from '../../elements/phone-block';
import CallBlock from '../../elements/call-block';
import {Col, Container, Row} from 'reactstrap';
import "./style.sass";

const Header = ({title}) => {
    return (
        <>
            <Head>
                <title>{title} </title>
                <link rel='icon' href='/static/favicon.png'/>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap&subset=cyrillic"
                    rel="stylesheet"/>
            </Head>
            <header>
                <Container>
                    <Row>
                        <Col className="d-lg-flex align-items-lg-center">
                            <Logo/>
                        </Col>
                        <Col>
                            <div className="top d-flex justify-content-end  align-items-center">
                                <PhoneBlock/>
                                <CallBlock/>
                                <a id="mobile-toggle" href="#menu"
                                   className="mobile-toggle hamburger hamburger--collapse hamburger--3dx  ">
                                 <span className="hamburger-box">
                                     <span className="hamburger-inner"></span>
                                 </span>
                                </a>
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


