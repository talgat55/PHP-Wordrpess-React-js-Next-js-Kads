import React from 'react';
import ReactHtmlParser  from 'react-html-parser';

const NewsItem = ({key, title, link, image, anons, date}) => {

    return (
        <div key={key} className="item d-flex align-items-center">
            <div className="img-block">
                <a href={link} className="link">
                    <img src={image} alt="Изображение"/>
                </a>
            </div>
            <div className="text">
                <div className="date">
                    10 августа, 2019
                </div>
                <h3 className="title">
                    {title}
                </h3>
                <div className="anons">
                    {ReactHtmlParser(anons)}
                </div>
                <a href={link} className="link-button">
                    Подробнее
                </a>
            </div>
        </div>
    );

};

export default NewsItem;