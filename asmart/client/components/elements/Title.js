import React from 'react';
import "./Title.sass";
const Title = ({title, main, ...props}) => {

    return (
        <>
        {       main
                    ?
                (<h1 className="sub-title"  {...props}>
                {title}
                </h1>)

                : (<h2 className="sub-title"  {...props}>
                {title}
                </h2>)
        }
        </>
    );
};


export default Title;