import React from 'react';
import './Search.css';

const Search = props => {
    return (
        <div className='search-area'>
            <input onChange={props.changeHandler} />
            <button className='middle' onClick={props.onClickData}>GET DATA!</button>
            <button onClick={props.onClickConsole}>Show data</button>
        </div>
    )
}

export default Search;