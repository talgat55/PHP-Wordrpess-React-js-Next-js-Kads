import ContentLoader from "react-content-loader";
import React from 'react';


const ServiceContentLoader = () => {
    return (
        <ContentLoader
            speed={1}
            primaryColor={'#f3f3f3'}
            secondaryColor={'#ecebeb'}
        >
            <rect x="0" y="0" rx="100" ry="100" width="100" height="100"/>
            <rect x="140" y="20" rx="4" ry="4" width="300" height="26"/>
            <rect x="140" y="60" rx="3" ry="3" width="250" height="15"/>
        </ContentLoader>
    );

};


export default ServiceContentLoader;
