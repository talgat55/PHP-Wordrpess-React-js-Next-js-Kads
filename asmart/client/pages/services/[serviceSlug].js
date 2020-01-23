import Header from "../../components/layouts/header/header";
import Hero from "../../components/elements/Hero";
import Breadcrumb from "../../components/elements/Breadcrumbs";
import Title from "../../components/elements/Title";
import Footer from "../../components/layouts/footer/footer";
import ServiceStepItem from "../../components/layouts/ServiceBlock/ServiceStepItem";
import ServiceLastItem from "../../components/layouts/ServiceBlock/ServiceLastItem";
import React from "react";
import {getServiceBySlug} from '../../components/api/service/service';
import {Container, Row} from "reactstrap";
import ReactHtmlParser from 'react-html-parser';
import "./service.sass";
import FeedbackBlock from "../../components/layouts/FeedbackBlock/FeedbackBlock";
import MapBlock from "../../components/layouts/MapBlock/MapBlock";
import PartBlock from "../../components/layouts/ServiceBlock/Part/PartBlock";
import DocBlock from "../../components/layouts/ServiceBlock/Part/DocBlock";
import {connect} from "react-redux";
import {
    ACTIVE_OVERLAY_STATE,
    ACTIVE_SERVICE_MODAL_STATE,
    CHANGE_SERVICE_STATE,
    CHANGE_SERVICE_TAB_STATE,
} from "../../types";

class ServicePost extends React.Component {
    constructor(props) {
        super(props);
        const item = this.props.post[0];

        this.state = {
            item: item,
            itemContent: item.acf.parts ? item.acf.parts[0] : '',
            currentIndex: 0,
            openClass: false,
            itemDocs: item.acf.parts ? item.acf.parts[0].docs ? item.acf.parts[0].docs : '' : '',
            itemSteps: item.acf.parts ? item.acf.parts[0].steps ? item.acf.parts[0].steps : '' : '',
            itemLastBlock: item.acf.parts ? item.acf.parts[0].steps_last_blocks ? item.acf.parts[0].steps_last_blocks : '' : '',

        };

        this.HandleClick = this.HandleClick.bind(this);
    }
    ClickEvent = (e) => {
        e.preventDefault();
        this.props.EnableServiceModal();
    };
    //
    //  Event click by element in left block
    //
    HandleClick(e) {
        this.setState({
            itemContent: this.state.item.acf.parts[e.counter],
            currentIndex: e.counter,
            openClass: false,
            itemDocs: this.state.item.acf.parts[e.counter].docs,
            itemSteps: this.state.item.acf.parts[e.counter].steps,
            itemLastBlock: this.state.item.acf.parts[e.counter].steps_last_blocks,
        });

        this.props.ChangeServiceTabState(e.title)

    }

    componentDidMount () {
        this.props.ChangeServiceState(this.state.item.title.rendered);
    }

    render() {

        const {
            item,
            itemContent,
            currentIndex,
            itemSteps,
            itemLastBlock,
            itemDocs,
            openClass
        } = this.state;

        let listBread = [{'key': 1, 'href': '/services', 'title': 'Услуги'}, {
            'key': 2,
            'href': '',
            'title': item.title.rendered
        }];

        let stylePart = {
            backgroundImage: `url(${item.acf.imageBgPart ? item.acf.imageBgPart : ''})`
        };
        let styleLast = {
            backgroundImage: `url(${item.acf.imageBgLast ? item.acf.imageBgLast : ''})`
        };

        return (
            <div id="main-wrap" className="main-wrap  service-single-page">
                <Header title={item.title.rendered}/>
                <Hero
                    breadscrumb={<Breadcrumb items={listBread}/>}
                    img={item.acf.imageDetail ? item.acf.imageDetail : '/static/hero-news.jpg'}
                >
                    <Title title={item.title.rendered} main="true" className="sub-title single-post"/>
                </Hero>
                <section className="description">
                    <Container>
                        <Row>
                            <div className="content">
                                {ReactHtmlParser(item.content.rendered)}
                            </div>
                        </Row>
                    </Container>
                </section>
                {
                    item.acf.parts && (
                        <section className="part-section">
                            <Container>
                                <Row>
                                    <div className="content" style={stylePart}>
                                        <div className="part-block-wrapper d-flex w-100">
                                            <div className="first col-md-6 col-12">
                                                <PartBlock
                                                    items={item.acf.parts}
                                                    current={currentIndex}
                                                    onClick={this.HandleClick}
                                                />
                                            </div>
                                            <div className="second col-md-6 col-12">
                                                {ReactHtmlParser(itemContent.text)}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        itemDocs && (
                                            <DocBlock
                                                openClass={openClass}
                                                items={itemDocs}
                                            />
                                        )
                                    }


                                </Row>
                            </Container>
                        </section>
                    )
                }
                {
                    itemSteps && (
                        <section className="steps-section">
                            <Container>
                                <Row>
                                    <div className="content w-100">
                                        <h2 className="text-center">
                                            Этапы работы
                                        </h2>
                                        <ul className="lists-steps d-flex justify-content-center">
                                            {
                                                itemSteps.map((item, index) => (
                                                    <ServiceStepItem
                                                        key={index}
                                                        counter={index}
                                                        title={item.title}
                                                    />
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Row>
                            </Container>
                        </section>
                    )
                }

                <section className="last-section" style={styleLast}>
                    <Container>
                        <Row>
                            <div className="content w-100 position-relative">
                                <h3 className="text-center">
                                    {item.acf.last_title}
                                </h3>
                                {
                                    itemLastBlock && (
                                        <ul className="lists-steps d-flex justify-content-center">
                                            {
                                                itemLastBlock.map((item, index) => (
                                                    <ServiceLastItem
                                                        key={index}
                                                        counter={index}
                                                        title={item.title}
                                                    />
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        </Row>
                        <Row className="position-relative d-flex w-100 justify-content-center">
                            <a href="#" className="link-order-new" onClick={ (e) => this.ClickEvent(e)}>
                                Заказать услугу
                            </a>
                        </Row>
                    </Container>
                </section>
                <FeedbackBlock/>
                <MapBlock/>
                <Footer/>
            </div>
        )
    }
};

ServicePost.getInitialProps = async (params) => {
    const post = await getServiceBySlug(params.query.serviceSlug);
    return {post: post};
};
const mapDispatchToProps = dispatch => {
    return {
        ChangeServiceState: (e) => {
            dispatch({type: CHANGE_SERVICE_STATE, payload: e})
        },
        ChangeServiceTabState: (e) => {
            dispatch({type: CHANGE_SERVICE_TAB_STATE, payload: e})
        },


        EnableServiceModal: () => {
            dispatch({type: ACTIVE_SERVICE_MODAL_STATE, payload: true});
            dispatch({type: ACTIVE_OVERLAY_STATE, payload: true})
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ServicePost);