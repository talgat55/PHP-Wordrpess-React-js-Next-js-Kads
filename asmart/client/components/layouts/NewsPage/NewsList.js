import React from 'react';
import {Col, Container, Row} from "reactstrap";

const NewsList = ({posts}) =>{
    return (
        <div>
            { console.log(posts)}
            <section className="info-block">
                <Container>
                    <Row>
                    News List
                    </Row>
                </Container>
            </section>
        </div>
    );
};
export default  NewsList;