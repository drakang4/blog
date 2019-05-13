import React, { useEffect, useRef } from 'react';

const Utterances = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig: { [key: string]: any } = {
      src: 'https://utteranc.es/client.js',
      repo: 'drakang4/blog',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    };

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });

    if (wrapper.current) {
      wrapper.current.appendChild(utterances);
    }
  }, []);
  return <div ref={wrapper} className="utterances-wrapper" />;
};

export default Utterances;
