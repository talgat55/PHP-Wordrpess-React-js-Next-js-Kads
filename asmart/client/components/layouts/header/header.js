import React from 'react';
import Head from 'next/head';
import Navigation from '../../navigation/nav';
import Logo from '../../elements/logo-block';
import PhoneBlock from '../../elements/phone-block';
import CallBlock from '../../elements/call-block';
import MobileMenu from '../../elements/MobileMenu';
import {Col, Container, Row} from 'reactstrap';
import "./style.sass";
import {YMInitializer} from 'react-yandex-metrika';
import TagManager from 'react-gtm-module';

class Header extends React.Component {

    componentDidMount() {
        const tagManagerArgs = {
            gtmId: 'UA-154889314-1'
        };

        TagManager.initialize(tagManagerArgs);
    }
    render() {
        const {
            title
        } = this.props;

        return (

            <>
                <Head>
                    <title>{title} </title>
                    <link rel='icon' href='/static/favicon.png'/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap&subset=cyrillic"
                        rel="stylesheet"/>

                    <YMInitializer accounts={[56793624]}/>
                    <meta name="yandex-verification" content="18c521e1181aca35" />
                </Head>
                <MobileMenu/>
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

                                </div>
                                <div className="bottom">
                                    <Navigation/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </>
        )
            ;
    }
};

export default Header;

