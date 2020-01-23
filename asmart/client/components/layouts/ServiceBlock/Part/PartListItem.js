import React from 'react';

const PartListItem = ({key,title,counter, onClick,current  }) => (
    <li key={key}  className={`item ${counter === current ?  'active'  : ''}`  }   onClick={ () => onClick({ counter: counter , title: title })} >
        {title}
    </li>
);


export default PartListItem;