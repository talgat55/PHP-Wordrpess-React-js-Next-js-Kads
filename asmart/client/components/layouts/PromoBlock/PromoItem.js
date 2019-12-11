import React from "react";
import ReactHtmlParser  from 'react-html-parser';
import "./style.sass";
const PromoItem = ({key,img, slogan, title, percent_value, description}) => {
    let styles = {
        backgroundImage: `url(${img})`
    };
    return (
        <li key={key} className="item col-xl-4 col-lg-4 col-md-6 col-sm-12"  >
            <div className="item-wrap  d-flex align-items-center justify-content-center" style={styles}>
            <div className="content text-center position-relative">
                <div className="percent">
                    {percent_value}
                </div>
                <h3 className="title">
                    {title}
                </h3>
                <div className="text">
                    {slogan}
                </div>
                {
                    description   && (
                        <div className="description">
                            {ReactHtmlParser(description)}
                        </div>
                    )
                }

            </div>
            </div>
        </li>
    );
};

export default PromoItem;