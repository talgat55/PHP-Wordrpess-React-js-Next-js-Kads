import React from 'react';

const ServiceStepItem = ({key, counter, title}) => {
    return (
        <li key={key} className="item    ">
            <div className="item-wrap d-flex align-items-center">
                <div className="counter">
                    {parseInt(counter + 1)}
                </div>
                <p>
                    {title}
                </p>
            </div>
        </li>
    );
};

export default ServiceStepItem;