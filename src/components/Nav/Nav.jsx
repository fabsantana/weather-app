import React from 'react';
import Logo from '../Logo/Logo.jsx'
import UnitsDropdown from '../UnitsDropdown/UnitsDropdown.jsx'

function Nav() {
  return (
    <div className='flex justify-between align-middle'>
      <Logo />
      <UnitsDropdown />
    </div>
  );
}

export default Nav;
