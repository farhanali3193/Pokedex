import React from 'react';

const SearchBox = function ({searchChange}){
    return (
        <div className = 'pa2'>
            <input className = 'pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Pokemons' onChange= {searchChange} />
        </div>
    )
}

export default SearchBox;