import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const awaited = async <T>(promise: Promise<T>) => {
    setLoading(true);
    await promise.finally(() => setLoading(false));
  };

  return [loading, awaited] as const;
};
