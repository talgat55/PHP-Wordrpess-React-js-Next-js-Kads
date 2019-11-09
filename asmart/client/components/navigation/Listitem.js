import React from 'react';
import Link from 'next/link';
const ListItem =({key,title, url}) =>{
    return (
      <li key={key}>
          <Link as={url} href={url}>
              <a>{title}</a>
          </Link>
      </li>
    );
};

export default ListItem;