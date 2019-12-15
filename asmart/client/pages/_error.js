/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'next/router';
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Breadcrumb from "../components/elements/Breadcrumbs";
class ErrorPage extends React.Component {

    static propTypes() {
        return {
            errorCode: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired
        }
    }

    static getInitialProps({res, xhr}) {
        const errorCode = res ? res.statusCode : (xhr ? xhr.status : null);
        return {errorCode}
    }

    render() {
        let response;
        const titlePage = '404';
        let listBread = [{'href': 'blog', 'title': titlePage}];
        switch (this.props.errorCode) {
            case 200: // Also display a 404 if someone requests /_error explicitly
            case 404:
                response = (
                    <div>

                        <Container className="pt-5 text-center">
                            <h1 className="display-4">404</h1>
                            <p>Страница <strong>{ this.props.router.pathname }</strong> не найдена.</p>
                        </Container>
                    </div>
                );
                break;
            case 500:
                response = (
                    <div>

                        <Container className="pt-5 text-center">
                            <h1 className="display-4">Ошибка на сервере</h1>
                        </Container>
                    </div>
                );
                break;
            default:
                response = (
                    <div>

                        <Container className="pt-5 text-center">
                            <h1 className="display-4">HTTP { this.props.errorCode } Ошибка</h1>
                            <p>
                                An <strong>HTTP { this.props.errorCode }</strong> произошла ошибка получая доступ к  <strong>{ this.props.router.pathname }</strong>
                            </p>
                        </Container>
                    </div>
                )
        }

        return (
            <div id="main-wrap" className="main-wrap  ">

                <Header title={titlePage}/>
                <Hero
                    breadscrumb={<Breadcrumb items={listBread}/>}
                    img="/static/hero-news.jpg"
                >
                    <Title title={titlePage} main="true" className="sub-title single-post"/>
                </Hero>
                {
                    response
                }
                <Footer/>
            </div>
        )
    }

}

export default withRouter(ErrorPage)
