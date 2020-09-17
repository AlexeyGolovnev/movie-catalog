import React from 'react';

function SearchBox(props) {

    const handlerUserInput = (e) => {
        props.setQuery(e.target.value);
    }
    return (
        <input onChange={handlerUserInput}
               className='header__search-box'
               type='text'
               name="search"
               placeholder='Enter query'/>
    )
}

export default SearchBox;