import React from 'react';
import './Content.scss'
import ContentItem from "./ContentItem/ContentItem";
import Pagination from "../Pagination/Pagination";


function Content(props) {
    let arrItems = [];
    if (props.movies) {
        arrItems = props.movies.map(item => {
            return (
                <ContentItem
                    key={item.imdbID}
                    poster={item.Poster}
                    title={item.Title}
                    year={item.Year}
                    imdbID={item.imdbID}
                    type={item.Type}
                />
            );
        })
    }
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    {arrItems}
                </div>
            </div>
            <Pagination totalMovies = {props.totalMovies}
                        moviesPerPage = {props.moviesPerPage}
                        currentPage = {props.currentPage}
                        setCurrentPage = {props.setCurrentPage}
            />
        </div>
    );
}

export default Content;