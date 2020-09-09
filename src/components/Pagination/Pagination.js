import React from 'react';
import './Pagination.scss'

function Pagination(props) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalMovies / props.moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    const changeCurrentPage = (e) => {
        e.preventDefault();
        props.setCurrentPage(+(e.target.text));
    }
    return (
        <nav className='pagination'>
            <ul className='pagination__list'>
                {pageNumbers.map(number => {
                    if (number === props.currentPage) {
                        return (
                            <li key={number} className='pagination__item'>
                                <a onClick={changeCurrentPage} href="#" className='pagination__link current'>
                                    {number}
                                </a>
                            </li>
                        )
                    } else {
                        return (
                            <li key={number} className='pagination__item'>
                                <a onClick={changeCurrentPage} href="#" className='pagination__link'>
                                    {number}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    );
}

export default Pagination;