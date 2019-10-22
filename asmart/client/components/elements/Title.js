import React from 'react';

const Title = ({title, ...props}) => {
    return (
        <h2 className="sub-title"  {...props}>
            {title}
        </h2>
    );
};


export default Title;