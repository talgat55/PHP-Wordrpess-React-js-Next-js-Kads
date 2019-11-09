import React from 'react';
import './Hero.sass';
import {Container, Row} from "reactstrap";

const Hero = ({img, breadscrumb, children}) => {
    let styles = {
        backgroundImage: `url(${img})`
    };
    return (
        <section className="hero-section" style={styles}>
            <div className="top">
                <Container>
                    <Row>
                        {breadscrumb}
                    </Row>
                </Container>
            </div>
            <div className="bottom d-flex w-100 align-items-center">
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            </div>
        </section>
    );
};


export default Hero;