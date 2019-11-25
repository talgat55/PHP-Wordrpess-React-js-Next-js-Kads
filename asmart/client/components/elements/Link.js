import React from 'react';
import Link from 'next/link';

const LinkComponent = ({slug, href, children}) => {
    return (
        <Link href={href} as={slug}>
            {children}
        </Link>
    );
};
export default LinkComponent;

