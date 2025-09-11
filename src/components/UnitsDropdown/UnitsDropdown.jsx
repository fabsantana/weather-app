import React from 'react';
import { DropdownMenu } from 'radix-ui';


function UnitsDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='rounded-lg bg-neutral-000-opaque'>
          <div className='flex gap-2.5 justify-evenly py-3 px-4'>
            <img src="../../public/images/icon-units.svg" alt="" />
            <span>Units</span>
            <img src="../../public/images/icon-dropdown.svg" alt="" />
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>

          <DropdownMenu.CheckboxItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.RadioGroup>
            <DropdownMenu.RadioItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger />
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )};

export default UnitsDropdown;
