import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Link from 'next/link';

const NewsList = ({posts}) =>{
    return (
        <div>
            { console.log()}
            <section className="info-block">
                <Container>
                    <Row>
                        <ul>
                        {posts.map( item => (
                            <li>
                                <Link href={`/blog/[blogSlug]`} as={`/blog/${item.slug}`}>
                                    <a>{ item.title.rendered}</a>
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </Row>
                </Container>
            </section>
        </div>
    );
};
export default  NewsList;