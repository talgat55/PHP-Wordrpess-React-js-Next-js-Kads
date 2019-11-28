import React from 'react';
import './style.sass';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {Col, Container, Row} from 'reactstrap';
import Title from '../../elements/Title';
import ContactItem from './ContactItem';
const MapBlock = () => {

    const contactList = [
        {
            'id': 1,
            'geo': 'г. Омск, ул. Лермонтова, 171, офис 24, 2-й этаж ',
            'phones': [
                '+7 (3812) 35-35-75',
                '+7 (3812) 32-47-87'
            ],
            'workTime': 'Пн-чт: с 8:30 до 17:30,  пт: с 8:30 до 16:30 (обед: с 12:00 до 13:00)'
        },
        {
            'id': 2,
            'geo': '10 лет октября 136',
            'phones': [
                '666-136',
                '280-231'
            ],
            'workTime': 'пн-чт 9-18, пт 9-17 без обеда'
        }
    ];

    return (
        <section className="map-block">
            <Container>
                <Row>
                    <Col lg="6" sm="12" className="content">
                        <div className="info">
                            <Title title="Адреса офисов"  />
                            <ul className="list-contacts">
                            {
                                contactList.map( item =>(
                                    <ContactItem
                                        key={item.id}
                                        geo={item.geo}
                                        phones={item.phones}
                                        workTime={item.workTime}
                                    />
                                ))
                            }
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <YMaps>
                            <Map defaultState={{center: [54.985132, 73.398098], zoom: 13}} className="map-full"
                                 width="100%" height="465px">
                                <Placemark
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [27, 36],
                                        iconImageOffset: [-13, -36],
                                        iconImageHref :"http://localhost:3000/static/marker.png"
                                    }}
                                     defaultGeometry={[54.984496, 73.426252]}/>
                                <Placemark
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [27, 36],
                                        iconImageOffset: [-13, -36],
                                        iconImageHref :"http://localhost:3000/static/marker.png"
                                    }}
                                    defaultGeometry={[54.985323, 73.413236]}/>
                            </Map>
                        </YMaps>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default MapBlock;