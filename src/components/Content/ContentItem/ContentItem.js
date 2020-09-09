import React from 'react';
import movieImg from './image-not-found.svg'

function ContentItem(props) {
    let poster ='';
    if(props.poster!='N/A' ) {
        poster = (<img className='content__img' src={props.poster}/>);
    }
    else poster = (<img className='content__img' src={movieImg}/>);
    return (
        <div className='content__item'>
            <div className="content__img-box">
                {poster}
            </div>
            <span className='content__item-name'>{props.title}</span>
            <span className='content__item-year'>Year: {props.year}</span>
            <span className='content__item-id'>imdbID: {props.imdbID}</span>
            <span className='content__item-type'>Type: {props.type}</span>
        </div>
    );
}

export default ContentItem;