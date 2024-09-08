import { Root, Thumb } from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '$/lib/utils';

const rootVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
  {
    defaultVariants: { size: 'default' },
    variants: { size: { default: 'h-8 w-16', sm: 'h-6 w-12' } },
  },
);

const thumbVariants = cva(
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
  {
    defaultVariants: { size: 'default' },
    variants: {
      size: {
        default: 'size-6 data-[state=checked]:translate-x-[32px] data-[state=unchecked]:translate-x-1',
        sm: 'size-[18px] data-[state=checked]:translate-x-[23px] data-[state=unchecked]:translate-x-[2px]',
      },
    },
  },
);

export type SwitchProps = ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof rootVariants>;

const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(function Switch(
  { className, size = 'default', ...props },
  ref,
) {
  return (
    <Root className={cn(rootVariants({ className, size }))} {...props} ref={ref}>
      <Thumb className={cn(thumbVariants({ size }))} />
    </Root>
  );
});

export { Switch };
