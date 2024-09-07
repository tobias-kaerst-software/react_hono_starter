import { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '$/lib/utils';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Stack: FC<StackProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn('flex flex-col gap-2', props.className)}>
      {children}
    </div>
  );
};
