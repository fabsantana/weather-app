import React from 'react';
import { DropdownMenu } from 'radix-ui';
import Icon from '../Icon'
import './UnitsDropdown.css';

function UnitsDropdown() {
  const [temp, setTemp] = React.useState('celsius')
  const [windSpeed, setWindSpeed] = React.useState('celsius')
  const [precipitation, setPrecipitation] = React.useState('celsius')

  function nextTemp(event) {
    setTemp(event.target.ariaLabel)
  }
  function nextWindSpeed(event) {
    setWindSpeed(event.target.ariaLabel)
  }
  function nextPrecipitation(event) {
    setPrecipitation(event.target.ariaLabel)
  }

``
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='dropdown-trigger rounded-lg bg-neutral-600 cursor-pointer'>
          <div className='flex gap-2.5 justify-evenly py-3 px-4'>
            <Icon variant='gear'/>
            <span>Units</span>
            <img className='dropdown-icon' src="/images/icon-dropdown.svg" alt="" />
          </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className=' dropdown-content-container bg-neutral-800 rounded-xl px-2.5 py-1.5' sideOffset={10} side='bottom' align='end'>
          <DropdownMenu.Item className="text-preset-7 py-2.5 px-2 rounded-lg hover:bg-neutral-700 focus:bg-neutral-700">
            Switch to Imperial
          </DropdownMenu.Item>

          <DropdownMenu.RadioGroup className='py-2.5' value={temp}>
          <DropdownMenu.Label className='text-preset-8 text-neutral-300 pb-2'>
            Temperature
          </DropdownMenu.Label>
            <DropdownMenu.RadioItem onSelect={nextTemp} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='celsius' aria-label='celsius'>
              Celsius (°C)
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem onSelect={nextTemp} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='fahrenheit' aria-label='fahrenheit'>
              Fahrenheit (°F)
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Separator className='h-px w-full bg-neutral-600' />

          <DropdownMenu.RadioGroup value={windSpeed} className='py-2.5'>
          <DropdownMenu.Label className='text-preset-8 text-neutral-300 pb-2'>
            Wind Speed
          </DropdownMenu.Label>
            <DropdownMenu.RadioItem onSelect={nextWindSpeed} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='kilometers' aria-label='kilometers'>
              km/h
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem onSelect={nextWindSpeed} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='miles' aria-label='miles'>
              mph
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          
          <DropdownMenu.Separator className='h-px w-full bg-neutral-600' />

          <DropdownMenu.RadioGroup value={precipitation} className='pt-2.5'>
          <DropdownMenu.Label className='text-preset-8 text-neutral-300 pb-2'>
            Precipitation
          </DropdownMenu.Label>
            <DropdownMenu.RadioItem onSelect={nextPrecipitation} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='milimeters' aria-label='milimeters'>
              Millimeters (mm)
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem onSelect={nextPrecipitation} className='text-preset-7 py-2 px-2 flex items-center justify-between cursor-pointer rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' value='inches' aria-label='inches'>
              Inches (in)
              <DropdownMenu.ItemIndicator>
                <Icon variant='checkmark'/>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )};

export default UnitsDropdown;
