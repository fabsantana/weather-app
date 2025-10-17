import React from 'react';
import { DropdownMenu } from 'radix-ui';
import './WeekdayDropdown.css';

function WeekdayDropdown({days, selectedDay, setSelectedDay}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='dropdown-trigger cursor-pointer'>
        <div className='flex gap-2.5 justify-evenly py-3 px-4 bg-neutral-600 rounded-lg'>
          <span>{selectedDay ? new Date(selectedDay).toLocaleDateString('en-US', {weekday: 'long'}) : 'Select Day'}</span>
          <img className='dropdown-icon' src="/images/icon-dropdown.svg" alt="" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-neutral-700 rounded-xl p-2'>
          <DropdownMenu.RadioGroup value={selectedDay} onValueChange={setSelectedDay}>
            {days.map(day => (
              <DropdownMenu.RadioItem className='text-preset-7 cursor-pointer py-2.5 px-2 rounded-lg hover:bg-neutral-700 focus:bg-neutral-700' sideOffset={10} side='bottom' align='end' key={day} value={day}>
                {new Date(day).toLocaleDateString('en-US', {weekday: 'long'})}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default WeekdayDropdown;
