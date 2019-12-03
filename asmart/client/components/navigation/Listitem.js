import React from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const ListItem =({key,title, url}) =>{
    return (
      <li key={key}>

          {
              window.location.pathname === '/' ?
                  url.indexOf('#') !== -1 ?
                      (
                          <AnchorLink
                              href={`#${url.split('#')[1]}` }
                          >
                              {title}
                          </AnchorLink>
                      )
                      :
                      (
                          <Link
                              as={url}
                              href={url}

                          >
                              <a>{title}</a>
                          </Link>

                      )
                  :
                  (
                      <Link
                          as={url}
                          href={url}

                      >
                          <a>{title}</a>
                      </Link>

                  )


          }


      </li>
    );
};

export default ListItem;