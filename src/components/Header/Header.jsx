import React from 'react';
import Logo from '../Logo/Logo.jsx';
import UnitsDropdown from '../UnitsDropdown/UnitsDropdown.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

function Header() {
  return (
    <div>
      <span className='block text-preset-2 font-bricolage py-12'>
        How’s the sky looking today?
      </span>
      <div className='flex flex-col gap-3'>
        <div className='input-container relative'>
          <Icon
            variant='search'
            className='absolute left-4 top-1/2 -translate-y-1/2'
          />
          <SearchBar className='bg-neutral-800 hover:bg-neutral-700 focus:outline-2 focus:outline-neutral-000 focus:outline-offset-3 rounded-xl py-4 pl-11 text-preset-5 text-neutral-200 w-full placeholder:text-preset-5 placeholder:text-neutral-200' />
        </div>
        <Button className='btn-primary w-full text-preset-5-med'>
          Search
        </Button>
      </div>
    </div>
  );
}

export default Header;
