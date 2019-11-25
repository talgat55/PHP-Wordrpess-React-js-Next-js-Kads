import React from 'react';
import {Container, Row} from "reactstrap";
import NewsItem from "../NewsBlock/NewsItem";

const NewsList = ({posts}) => {
    return (
        <section className="news-block">
            <Container>
                <div className="news-list">
                    <Row>
                        {posts.map(item => (
                            <NewsItem
                                key={item.id}
                                title={item.title.rendered}
                                link={item.slug}
                                image={item.acf.image}
                                anons={item.acf.anons}
                                date={item.date}
                                elementClass="col-lg-6  col-md-6 col-xs-12 col-12"
                            />
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};
export default NewsList;