import { CaretSortIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Viewport,
} from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '$/lib/utils';

const SelectTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  function SelectTrigger({ children, className, ...props }, ref) {
    return (
      <Trigger
        className={cn(
          'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <Icon asChild>
          <CaretSortIcon className='size-4 opacity-50' />
        </Icon>
      </Trigger>
    );
  },
);

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof ScrollUpButton>,
  ComponentPropsWithoutRef<typeof ScrollUpButton>
>(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
    <ScrollUpButton
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      ref={ref}
      {...props}
    >
      <ChevronUpIcon />
    </ScrollUpButton>
  );
});

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof ScrollDownButton>,
  ComponentPropsWithoutRef<typeof ScrollDownButton>
>(function SelectScrollDownButton({ className, ...props }, ref) {
  return (
    <ScrollDownButton
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      ref={ref}
      {...props}
    >
      <ChevronDownIcon />
    </ScrollDownButton>
  );
});

const SelectContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  function SelectContent({ children, className, position = 'popper', ...props }, ref) {
    return (
      <Portal>
        <Content
          className={cn(
            'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className,
          )}
          position={position}
          ref={ref}
          {...props}
        >
          <SelectScrollUpButton />
          <Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            {children}
          </Viewport>
          <SelectScrollDownButton />
        </Content>
      </Portal>
    );
  },
);

const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(function SelectLabel(
  { className, ...props },
  ref,
) {
  return <Label className={cn('px-2 py-1.5 text-sm font-semibold', className)} ref={ref} {...props} />;
});

const SelectItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(function SelectItem(
  { children, className, ...props },
  ref,
) {
  return (
    <Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className='absolute right-2 flex size-3.5 items-center justify-center'>
        <ItemIndicator>
          <CheckIcon className='size-4' />
        </ItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
    </Item>
  );
});

const SelectSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  function SelectSeparator({ className, ...props }, ref) {
    return <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />;
  },
);

export {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
};

export { Group as SelectGroup, Root as Select, Value as SelectValue } from '@radix-ui/react-select';
