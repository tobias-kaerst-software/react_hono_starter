import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '$/lib/utils';

export const typographyVariants = cva('text-xl', {
  defaultVariants: {
    affects: 'default',
    variant: 'h1',
  },
  variants: {
    affects: {
      default: '',
      large: 'text-lg font-semibold',
      lead: 'text-xl text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      removePMargin: '[&:not(:first-child)]:mt-0',
      small: 'text-sm font-medium leading-none',
    },
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
    },
  },
});

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(function Typography(
  { affects, className, variant, ...props },
  ref,
) {
  const Comp = variant || 'p';
  return <Comp className={cn(typographyVariants({ affects, className, variant }))} ref={ref} {...props} />;
});
