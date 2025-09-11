import React from 'react';
import Logo from '../Logo';
import UnitsDropdown from '../UnitsDropdown';

function Header() {
  return (
    <div className='flex justify-between align-middle'>
      <Logo />
      <UnitsDropdown />
    </div>
  );
}

export default Header;
