import React from 'react';
import { IconsContext } from '../IconsProvider/IconsContext.jsx';

function Icon({className='', name}) {
  const {APP_ICONS} = React.useContext(IconsContext)
  return <img className={className} src={Object.keys(APP_ICONS).includes(name) ? APP_ICONS[name].appIconURL : ''} />;
}

export default Icon;
