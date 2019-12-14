import React from 'react';
import PromoLoaders from './Promo';

const PromoLoaderWrapper = () => {
    const LIST = [
        {content: ''},
        {content: ''},
        {content: ''},

    ];
    return (
        <>
            {
                LIST.map((item, index) => (
                    <PromoLoaders key={index}/>
                ))
            }
        </>
    );
};

export default PromoLoaderWrapper;