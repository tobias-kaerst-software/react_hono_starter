import { FC, useEffect, useState } from 'react';

interface Props {
  func?: () => void;
}

export const App: FC<Props> = ({ func }) => {
  const [state] = useState();

  useEffect(() => {
    func?.();
    console.log(state);
  }, [state, func]);

  return (
    <div className='h-screen w-full bg-slate-900 '>
      <img alt='' src='icon.png' />
    </div>
  );
};
