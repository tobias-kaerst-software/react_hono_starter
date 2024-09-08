import { Root, Thumb } from '@radix-ui/react-switch';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '$/lib/utils';

const Switch = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(function Switch(
  { className, ...props },
  ref,
) {
  return (
    <Root
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
      ref={ref}
    >
      <Thumb
        className={cn(
          'pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      />
    </Root>
  );
});

export { Switch };
