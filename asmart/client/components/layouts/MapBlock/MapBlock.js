import React, {useState} from 'react';
import './style.sass';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {Col, Container, Row} from 'reactstrap';
import Title from '../../elements/Title';
import ContactItem from './ContactItem';
import ctx from 'classnames';
import Slider from "react-slick";

const MapBlock = () => {
    const [placemarkImg, setPlacemarkImg] = useState('');
    const [showModal, setShowModal] = useState('');
    const contactList = [
        [
            {
                'id': 1,
                'geo': 'г. Омск, ул. Лермонтова, 171, офис 24, 2-й этаж ',
                'phones': [
                    '+7 (3812) <span>35-35-75</span>',
                    '+7 (3812) <span>32-47-87</span>'
                ],
                'workTime': 'Пн-Чт: с 8:30 до 17:30,  Пт: с 8:30 до 16:30 (обед: с 12:00 до 13:00)'
            },
            {
                'id': 2,
                'geo': 'г. Омск, ул. 10 лет октября 136, 1-й этаж',
                'phones': [
                    '+7 (3812) <span>66-61-36</span>',
                    '+7 (3812) <span>28-02-31</span>'
                ],
                'workTime': 'Пн-Чт 9-18, Пт 9-17 без обеда'
            },
        ],
       [
           {
               'id': 3,
               'geo': 'с. Троицкое, ул. Октябрьская, 1а, офис 11, 1-й этаж',
               'phones': [
                   '+7 (3812) <span>35-35-85</span>',
               ],
               'workTime': 'Пн-Ср: с 8:30 до 17:30 (обед: с 12:30 до 13:30)'
           }
       ]

    ];

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const mapImgSrc = [
        {
            'image': '/static/ballon1.jpg',
            'adr': 'ул. Лермонтова, 171, офис 24'
        },
        {
            'image': '/static/ballon2.jpg',
            'adr': '10 лет октября 136'
        },
        {
            'image': '/static/ballon3.jpg',
            'adr': 'Село троицкое октябрьская 1а каб 11'
        },

    ];
    const onClick = (e) => {
        setPlacemarkImg(mapImgSrc[e]);
        setShowModal(true);
    };

    const closeModal = e => {
        e.preventDefault();
        setShowModal('');

        setTimeout(()=>{
            setPlacemarkImg(' ');
        },200);

    };
    return (
        <section className="map-block">
            <Container>
                <Row>
                    <Col lg="6" sm="12" className="content">
                        <div className="info">
                            <Title title="Адреса офисов"/>
                            <div className="list-contacts">
                                <Slider {...settings}>
                                    {contactList.map((item,index) => (
                                        <div>
                                            {
                                                item.map(value =>(
                                                    <ContactItem
                                                        key={value.index}
                                                        geo={value.geo}
                                                        phones={value.phones}
                                                        workTime={value.workTime}
                                                    />
                                                ))
                                            }
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <YMaps>
                            <Map defaultState={{center: [54.942276, 73.260026], zoom: 11}} className="map-full"
                                 width="100%" height="465px">
                                <Placemark
                                    onClick={() => onClick(0)}
                                    balloonContentBody={`<img src="" />`}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [27, 36],
                                        iconImageOffset: [-13, -36],
                                        iconImageHref: "http://kadastr.lightxdesign.ru:3000/static/marker.png"
                                    }}
                                    defaultGeometry={[54.984496, 73.426252]}/>
                                <Placemark
                                    onClick={() => onClick(1)}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [27, 36],
                                        iconImageOffset: [-13, -36],
                                        iconImageHref: "http://kadastr.lightxdesign.ru:3000/static/marker.png"
                                    }}
                                    defaultGeometry={[54.985323, 73.413236]}/>

                                <Placemark
                                    onClick={() => onClick(2)}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [27, 36],
                                        iconImageOffset: [-13, -36],
                                        iconImageHref: "http://kadastr.lightxdesign.ru:3000/static/marker.png"
                                    }}
                                    defaultGeometry={[54.858829, 73.297281]}/>


                            </Map>
                        </YMaps>
                        <div
                            className={ctx('content-map ', {'active': showModal})}
                        >
                            <h3>
                                {placemarkImg.adr}
                            </h3>
                            <a href="#" className="close-modal-map" onClick={(e) => closeModal(e)}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.7824 7.44996L0.143027 14.0893C-0.0414258 14.2738 -0.0414258 14.5726 0.143027 14.7571C0.235137 14.8494 0.356074 14.8954 0.476777 14.8954C0.597715 14.8954 0.718418 14.8494 0.810528 14.7571L7.49983 8.06777L14.1891 14.7571C14.2815 14.8494 14.4022 14.8954 14.5229 14.8954C14.6436 14.8954 14.7645 14.8494 14.8566 14.7571C15.0411 14.5726 15.0411 14.2738 14.8566 14.0893L8.21748 7.44996L14.8611 0.805898C15.0455 0.621445 15.0455 0.322617 14.8611 0.138164C14.6766 -0.0460547 14.3778 -0.0460547 14.1936 0.138164L7.50006 6.83215L0.80584 0.138398C0.621387 -0.0458203 0.322793 -0.0458203 0.13834 0.138398C-0.0461133 0.322852 -0.0461133 0.62168 0.13834 0.806133L6.7824 7.44996Z"
                                        fill="#1D1D1B"></path>
                                </svg>
                            </a>
                            <div className="content-map-content">
                                <img src={placemarkImg.image} alt="Изображение"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default MapBlock;