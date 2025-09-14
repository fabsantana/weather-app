import React from 'react';
import { IconsContext } from '../IconsProvider/IconsContext.jsx';

function Icon({className='', variant}) {
  const {APP_ICONS} = React.useContext(IconsContext)
  return <img className={className} src={Object.keys(APP_ICONS).includes(variant) ? APP_ICONS[variant].appIconURL : ''} />;
}

export default Icon;
