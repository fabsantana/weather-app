import React from 'react';
import Logo from '../Logo/Logo.jsx';
import UnitsDropdown from '../UnitsDropdown/UnitsDropdown.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx'
import Button from '../Button/Button.jsx'
import Icon from '../Icon/Icon.jsx';

function Header() {
  return (
    <div>
      <div className='flex justify-between align-middle'>
        <Logo />
        <UnitsDropdown />
      </div>
      <span className='block text-preset-2 font-bricolage py-12'>How’s the sky looking today?</span>
      <div className='flex flex-col gap-3'>
        <div className="input-container relative">
        <Icon name='search' className='absolute left-4 top-1/2 -translate-y-1/2' />
        <SearchBar className='bg-neutral-800 hover:bg-neutral-700 focus:outline-2 focus:outline-neutral-000 focus:outline-offset-3 rounded-xl py-4 pl-11 text-preset-5 text-neutral-200 w-full placeholder:text-preset-5 placeholder:text-neutral-200'/>
        </div>
        <Button text='Search' className='bg-blue-500 rounded-xl py-4 px-6 w-full text-preset-5-med cursor-pointer hover:bg-blue-700 focus:outline-2 focus:outline-blue-500 focus:outline-offset-3' />
      </div>
    </div>
  );
}

export default Header;
