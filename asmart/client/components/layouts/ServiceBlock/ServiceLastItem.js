import React from 'react';

const ServiceStepItem = ({key, counter, title}) => {
    return (
        <li key={key} className="item    d-flex align-items-center">
            <div className="counter">
                <img src="/static/tick-inside-circle.png" alt="Иконка"/>
            </div>
            <p>
                {title}
            </p>
        </li>
    );
};

export default ServiceStepItem;