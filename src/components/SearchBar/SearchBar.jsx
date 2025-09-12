import React from 'react';

function SearchBar({className=''}) {
  return <input className={className} type='text' placeholder='Search for a place...' />;
}

export default SearchBar;
