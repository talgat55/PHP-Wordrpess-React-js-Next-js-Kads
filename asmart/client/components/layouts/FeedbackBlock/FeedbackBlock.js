import React from 'react';
import Form from '../../forms/feedback/feedback';
import {Col, Container, Row} from "reactstrap";
import './style.sass';

class FeedbackBlock extends React.Component {
    handleSubmit = (values) => {
        console.log(values);
    };

    render() {
        return (
            <section className="feedback-block">
                <Container>
                    <Row>
                        <Col lg="12">
                            <Form onSubmit={this.handleSubmit}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
};
export default FeedbackBlock;