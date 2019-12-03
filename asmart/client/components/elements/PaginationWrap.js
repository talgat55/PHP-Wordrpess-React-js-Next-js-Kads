import React from 'react';
import {Container} from "reactstrap";
import './PaginationWrap.sass';
import Link from 'next/link'
import Router from 'next/router'

const Pagination = ({page, pathname, maxcount}) => (
    <section className="pagination-wrap">
        <Container>
            <ul className="pagination">
                { console.log(page)}
                <li key='1'>
                    <Link href={`${pathname}?page=1`}>
                        <a>Первая страница</a>
                    </Link>
                </li>

                {
                    page <= 1 ||
                        (<li key="2">
                            <a
                                onClick={() => Router.push(`${pathname}?page=${page - 1}`)}
                                disabled={page <= 1}
                            >
                                Предыдущая
                            </a>
                        </li>)
                }
                {
                    parseInt(maxcount / 12) > page + 1 &&
                        (<li key="3">
                            <a onClick={() => Router.push(`${pathname}?page=${page + 1}`)}>
                                Следующая
                            </a>
                        </li>)

                }

            </ul>
        </Container>
    </section>
);

export default Pagination;