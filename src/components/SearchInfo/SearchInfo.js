import React from 'react';
import './SearchInfo.scss';

function SearchInfo(props) {
    let info = '';
    if (props.query != '') {
        info = (
            <span className='search-info__text'>
                You searched for: <span> {props.query} </span>, {`${props.totalMovies} results found`}
            </span>);
    }
    else
        info = (
            <span className='search-info__text'>
                You searched for:
            </span>);
    return (
        <div className='search-info'>
            <div className="container">
                <div className="search-info__inner">
                    {info}
                </div>
            </div>
        </div>
    );
}

export default SearchInfo;