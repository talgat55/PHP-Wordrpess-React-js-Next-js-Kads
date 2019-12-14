import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ServiceContentLoader from './Service';

const ServiceWrap = () => {
    const LIST = [
        { key: 0},
        { key: 1},
        { key: 2},
        { key: 3},
        { key: 4},
        { key: 5},
        { key: 6},
        { key: 7},
        { key: 8}
    ];
    return (
        <Container>
            <Row className="service-list">
                {
                    LIST.map(item => (
                        <Col className="item" key={item.key} lg="4" md="6" sm="12">
                            <ServiceContentLoader/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default ServiceWrap;


