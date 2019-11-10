import React from "react";

const PromoItem = ({img, slogan, title, percent_value}) => {
    return (
        <li className="item col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="content text-center">
                <div className="percent">
                    {percent_value}
                </div>
                <h3 className="title">
                    {title}
                </h3>
                <div className="text">
                    {slogan}
                </div>
            </div>
        </li>
    );
};

export default PromoItem;