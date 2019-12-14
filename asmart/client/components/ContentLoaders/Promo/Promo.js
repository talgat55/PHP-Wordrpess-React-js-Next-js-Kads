import ContentLoader from "react-content-loader";
import React from 'react';


const PromoContentLoader = () => (
    <ContentLoader
        speed={1}
        primaryColor={'#f3f3f3'}
        height={80}
        secondaryColor={'#ecebeb'}
    >
        <rect x="0" y="0" rx="4" ry="4" width="200" height="20"/>
        <rect x="0" y="25" rx="3" ry="3" width="250" height="45"/>
    </ContentLoader>
);
export default PromoContentLoader;