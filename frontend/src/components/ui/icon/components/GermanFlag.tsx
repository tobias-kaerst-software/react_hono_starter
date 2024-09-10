import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 341.3h512V512H0z' fill='#fc0' />
    <path d='M0 0h512v170.7H0z' fill='#000001' />
    <path d='M0 170.7h512v170.6H0z' fill='red' />
  </svg>
);

export const GermanFlag = memo(forwardRef(SvgComponent));
