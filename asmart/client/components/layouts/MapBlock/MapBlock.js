import React from 'react';
import './style.sass';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {Col, Container, Row} from 'reactstrap';
import Title from '../../elements/Title';
import ContactItem from './ContactItem';
const MapBlock = () => {

    const contactList = [
        {
            'geo': 'г. Омск, ул. Лермонтова, 171, офис 24, 2-й этаж ',
            'phones': [
                '+7 (3812) 35-35-75',
                '+7 (3812) 32-47-87'
            ],
            'workTime': 'Пн-чт: с 8:30 до 17:30,  пт: с 8:30 до 16:30 (обед: с 12:00 до 13:00)'
        },
        {
            'geo': 'с. Троицкое, ул. Октябрьская, 1а, офис 11, 1-й этаж ',
            'phones': [
                '+7 (3812) 35-35-85',
                '+7 (3812) 28-02-31'
            ],
            'workTime': 'Пн-чт: с 8:30 до 17:00,  пт: с 8:30 до 16:00 (обед: с 12:30 до 13:30)'
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
                            <Map defaultState={{center: [54.924714, 73.321528], zoom: 11}} className="map-full"
                                 width="100%" height="465px">
                                <Placemark defaultGeometry={[54.984496, 73.426252]}/>
                                <Placemark defaultGeometry={[54.856377, 73.296104]}/>
                            </Map>
                        </YMaps>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default MapBlock;