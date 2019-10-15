import React from 'react';
import ReactHtmlParser  from 'react-html-parser';

const ReviewItem = ({key, title,text,date}) => {
    return (
        <div className="item" key={key}>
            <h3 className="title">
                {ReactHtmlParser(title)}
            </h3>
            <div className="date">
                30 июля 2019
            </div>
            <div className="content">
                <div>
                    {ReactHtmlParser(text)}
                </div>
            </div>
            {  text.length > 500 && (<a href="#" className="show-more">Показать полностью</a>)  }
        </div>
    );
};

export default  ReviewItem;
