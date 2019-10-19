import React from 'react';
import {Container} from 'reactstrap';
import ReactHtmlParser  from 'react-html-parser';

const SliderItem = ({key, title, text, urlVideo, image, items, current}) => {
    let styles = {
        backgroundImage: `url(${image})`
    };
    return (

        <div className="item" key={key}  data-id={key} style={styles}>
            <div className="overlay-layer"></div>
            <Container>
                <div className="row align-items-center w-100 height-block">
                    <div className="content col-lg-7 col-md-12">
                        <h2>
                            {title}
                        </h2>
                        <div className="text">
                            {ReactHtmlParser(text)}
                        </div>
                        <div className="bottom d-flex align-items-center">
                            <a href="#" className="link-order-new">
                                Заказать услугу
                            </a>
                            <a href="#" className="link-show-video d-flex align-items-center">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                          d="M12.5 24C18.8513 24 24 18.8513 24 12.5C24 6.14873 18.8513 1 12.5 1C6.14873 1 1 6.14873 1 12.5C1 18.8513 6.14873 24 12.5 24Z"
                                          stroke="white"/>
                                    <path
                                          d="M10.5269 7.61279C10.4645 7.56543 10.3817 7.55814 10.3125 7.59457C10.2435 7.631 10.2 7.70493 10.2 7.78572V17.2144C10.2 17.2952 10.2435 17.3691 10.3125 17.4055C10.3416 17.421 10.3737 17.4287 10.4053 17.4287C10.4482 17.4287 10.4909 17.4147 10.5269 17.3873L16.6876 12.673C16.7404 12.6325 16.7714 12.5682 16.7714 12.5001C16.7714 12.4319 16.7404 12.3676 16.6876 12.3271L10.5269 7.61279Z"
                                          fill="white"/>
                                </svg>
                                <p>
                                    Просмотр видео
                                </p>
                            </a>


                        </div>
                    </div>
                    <div className="links col-lg-5 col-md-12 d-flex align-items-center">
                        <ul className="items-links">
                            {
                                items.map( (item , key) =>(
                                    <li className={ current === key && 'active'  }>
                                        <a href="#" className="item-link" data-id={key} >
                                            {item.title.rendered}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </Container>
        </div>

    );

};

export default SliderItem;
