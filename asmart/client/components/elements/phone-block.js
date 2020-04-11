import React from 'react';
import './phone-block.sass';
const  PhoneBlock = () =>{
    return(
        <div className="phone-block d-flex align-items-center">
            <div className="img-block">
                <img src="/static/phone.png" alt="иконка"/>
            </div>
            <a className="phone-link" href="tel:+7(3812) 35-35-75">
                (3812) 35-35-75
            </a>
        </div>
    );
};
export default PhoneBlock;