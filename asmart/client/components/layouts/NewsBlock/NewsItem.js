import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import LinkComponent from '../../elements/Link';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const NewsItem = ({key, title, link, image, anons, date, elementClass}) => {

    return (
        <div key={key} className={`item d-flex align-items-center ${elementClass}`}>
            <div className="img-block">
                <LinkComponent href="/blog/[blogSlug]" slug={`/blog/${link}`}>
                    <a className="link"> <img src={image} alt="Изображение"/></a>
                </LinkComponent>
            </div>
            <div className="text">
                <div className="date">
                    { dayjs(date).locale('ru').format('d MMMM YYYY') }
                </div>
                <LinkComponent href="/blog/[blogSlug]" slug={`/blog/${link}`}>
                    <a className="link">
                        <h3 className="title">{title} </h3>
                    </a>
                </LinkComponent>
                <div className="anons">
                    {ReactHtmlParser(anons)}
                </div>
                <LinkComponent href="/blog/[blogSlug]" slug={`/blog/${link}`}>
                    <a className="link-button"> Подробнее</a>
                </LinkComponent>
            </div>
        </div>
    );

};

export default NewsItem;