import React, { useEffect } from 'react';

const Utterances = () => {
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

    document.body.appendChild(utterances);
  }, []);
  return <div className="utterances" />;
};

export default Utterances;
