import React from 'react';
import './Breadcrumbs.sass';
const Breadcrumbs = ({ items}) => {
    let array =  [ { href: '/', title: 'Главная' }, ...items];
    return (
        <ul className="breadcrumbs  d-flex align-items-center  w-100">
            {
                array.map(item => (
                    <li>
                        <a href={item.href}>
                            {item.title}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};

export default  Breadcrumbs;
