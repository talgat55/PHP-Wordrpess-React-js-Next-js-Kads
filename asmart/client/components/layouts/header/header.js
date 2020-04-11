import React from 'react';
import Head from 'next/head';
import Navigation from '../../navigation/nav';
import Logo from '../../elements/logo-block';
import PhoneBlock from '../../elements/phone-block';
import CallBlock from '../../elements/call-block';
import MobileMenu from '../../elements/MobileMenu';
import {Col, Container, Row} from 'reactstrap';
import "./style.sass";
import ReactGA from 'react-ga';
const trackingId = "UA-154970482-1";


class Header extends React.Component {
    state = {
        phoneNumber: '35-35-75'
    };




    componentWillMount() {
        ReactGA.initialize(trackingId);
    }
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {

        const {
            title,
            description
        } = this.props;


        return (

            <>
                <Head>

                    <title>{title}</title>
                    {
                        description  && (<meta name="description" content={description}/>)
                    }

                    <link rel='icon' href='/static/favicon.png'/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap&subset=cyrillic"
                        rel="stylesheet"/>

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
                                    <PhoneBlock  />
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

