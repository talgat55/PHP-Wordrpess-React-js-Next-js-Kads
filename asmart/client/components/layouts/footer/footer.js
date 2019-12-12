import React, { useState, useEffect }  from 'react';
import Navigation from '../../navigation/nav-footer';
import {Container, Row} from 'reactstrap';
import "./style.sass";
import Logo from "../../elements/logo-block";
import CallBlock from '../../elements/call-block';
import PhoneBlock from '../../elements/phone-block';
import Modal from '../Modal/Modal';
import OverlayLayer from "../../elements/OverlayLayer";
import ModalSuccess from '../Modal/ModalSuccess';
import ModalService from '../Modal/ModalService';
import {getThemeOptions} from '../../api/settings/settings';

const Footer = () => {


    const [requesitUrl, setRequesitUrl] = useState('#');

    useEffect(() => {
        const themeSettings = getThemeOptions();
        themeSettings.then((resolve) => {
            setRequesitUrl(resolve.acf.file_requise);
        });

    });
    return (
        <>
            <footer>
                <Container>
                    <Row className=" w-100 align-items-center">
                        <div className="col-lg-2  col-md-12 text-center first">
                            <Logo/>
                            <a href={requesitUrl}  target="_blank" className="link-requisites">
                                Реквизиты компании
                            </a>
                        </div>
                        <div className="second col-lg-5 col-md-12">
                            <Navigation/>
                        </div>
                        <div className="third col-lg-5 col-md-12">
                            <div
                                className=" d-flex justify-content-lg-end   justify-content-sm-center  align-items-center">
                                <PhoneBlock/>
                                <CallBlock/>
                            </div>
                            <a target="_blank" className="bottom-copyright" title="Перейти на сайт разработчика"
                               href="http://asmart-group.ru/">Сайт разработан IT-company <span>ASMART</span>
                            </a>
                        </div>
                    </Row>
                </Container>
            </footer>
            <Modal/>
            <OverlayLayer/>
            <ModalSuccess/>
            <ModalService/>
        </>

    );
};

export default Footer;

