import React from 'react';
import './Header.scss'
import userImg from './../../user.svg';
import SearchBox from "./SearchBox/SearchBox";


function Header (props) {
    return (
      <header className='header'>
        <div className="container">
            <div className="header__inner">
                <span className="header__logo">
                    Movie Catalog
                </span>
                <SearchBox setQuery = {props.setQuery}/>
                <div className='header__login-box'>
                    <img src = {userImg}  className='header__user-img'/>
                    <span className='header__user-name'> Alexey Golovnev </span>
                </div>
            </div>
        </div>
      </header>
    );
}

export default Header;