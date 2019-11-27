import React from   'react';
import PartListItem from "./PartListItem";


const PartBlock = ({items, current, onClick}) => (
    <ul className="lists-parts">
        {
            items.map((item, index) => (
                <PartListItem
                    key={index}
                    title={item.title}
                    onClick={onClick}
                    counter={index}
                    current={current}
                />
            ))
        }
    </ul>
);

export default PartBlock;