import React, { useEffect, useRef } from 'react';

const Utterances = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig: { [key: string]: any } = {
      src: 'https://utteranc.es/client.js',
      repo: 'drakang4/blog',
      'issue-term': 'pathname',
      theme: 'preferred-color-scheme',
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    wrapper.current?.appendChild(utterances);
  }, []);

  return <div ref={wrapper} className="mx-auto max-w-3xl py-4 lg:py-0 " />;
};

export default Utterances;
