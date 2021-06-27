import { useEffect, useState } from 'react';
import { Post } from '@interfaces/post';

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<string>('idle');
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus('fetched');
    };

    fetchData();
  }, [url]);

  return { status, data };
};
