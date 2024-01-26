import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ComboboxDemoProps {
  value: string;
  setValue: (data: string) => void;
  placeholder: string;
  datas: string[];
}

export function ComboboxDemo({
  value,
  setValue,
  placeholder,
  datas,
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-3/5 min-w-[200px] justify-between text-base py-6 px-6"
        >
          {value ? datas.find((data) => data === value) : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-3/5 min-w-[200px] p-1">
        <Command>
          {/* <CommandInput placeholder={placeholder} />
          <CommandEmpty>No framework found.</CommandEmpty> */}
          <CommandGroup className="h-[200px] overflow-y-scroll -scroll-mt-4 p-0">
            {datas.map((data) => (
              <CommandItem
                key={data}
                value={data}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === data ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {data}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
