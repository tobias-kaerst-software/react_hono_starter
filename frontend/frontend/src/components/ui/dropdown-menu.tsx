import {
  CheckboxItem,
  Content,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioItem,
  Separator,
  SubContent,
  SubTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

import { cn } from '$/lib/utils';

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  { inset?: boolean } & ComponentPropsWithoutRef<typeof SubTrigger>
>(function DropdownMenuSubTrigger({ children, className, inset, ...props }, ref) {
  return (
    <SubTrigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        inset && 'pl-8',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronRight className='ml-auto size-4' />
    </SubTrigger>
  );
});

const DropdownMenuSubContent = forwardRef<ElementRef<typeof SubContent>, ComponentPropsWithoutRef<typeof SubContent>>(
  function DropdownMenuSubContent({ className, ...props }, ref) {
    return (
      <SubContent
        className={cn(
          'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

const DropdownMenuContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  function DropdownMenuContent({ className, sideOffset = 4, ...props }, ref) {
    return (
      <Portal>
        <Content
          className={cn(
            'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          ref={ref}
          sideOffset={sideOffset}
          {...props}
        />
      </Portal>
    );
  },
);

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  { inset?: boolean } & ComponentPropsWithoutRef<typeof Item>
>(function DropdownMenuItem({ className, inset, ...props }, ref) {
  return (
    <Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ComponentPropsWithoutRef<typeof CheckboxItem>
>(function DropdownMenuCheckboxItem({ checked, children, className, ...props }, ref) {
  return (
    <CheckboxItem
      checked={checked}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className='absolute left-2 flex size-3.5 items-center justify-center'>
        <ItemIndicator>
          <Check className='size-4' />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  );
});

const DropdownMenuRadioItem = forwardRef<ElementRef<typeof RadioItem>, ComponentPropsWithoutRef<typeof RadioItem>>(
  function DropdownMenuRadioItem({ children, className, ...props }, ref) {
    return (
      <RadioItem
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className='absolute left-2 flex size-3.5 items-center justify-center'>
          <ItemIndicator>
            <Circle className='size-4 fill-current' />
          </ItemIndicator>
        </span>
        {children}
      </RadioItem>
    );
  },
);

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  { inset?: boolean } & ComponentPropsWithoutRef<typeof Label>
>(function DropdownMenuLabel({ className, inset, ...props }, ref) {
  return <Label className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)} ref={ref} {...props} />;
});

const DropdownMenuSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  function DropdownMenuSeparator({ className, ...props }, ref) {
    return <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />;
  },
);

const DropdownMenuShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />;
};

export {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
};

export {
  Group as DropdownMenuGroup,
  Portal as DropdownMenuPortal,
  RadioGroup as DropdownMenuRadioGroup,
  Root as DropdownMenu,
  Sub as DropdownMenuSub,
  Trigger as DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
