import React from 'react';

const PartListItem = ({key,title,counter  }) => (
    <li key={key}  className={`item ${counter === 0 ?  'active'  : ''}`  }  >
        {title}
    </li>
);


export default PartListItem;