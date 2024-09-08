import { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '$/lib/utils';

export interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const HStack: FC<HStackProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn('flex gap-2', props.className)}>
      {children}
    </div>
  );
};
