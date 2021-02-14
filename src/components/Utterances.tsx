import React, { useEffect, useRef } from 'react';
import useTheme from '../hooks/useTheme';

const Utterances = () => {
  const initialzied = useRef(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) {
      return;
    }

    const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';

    if (initialzied.current) {
      const message = {
        type: 'set-theme',
        theme: utterancesTheme,
      };
      const frame = document.querySelector<HTMLIFrameElement>(
        '.utterances-frame',
      );
      frame?.contentWindow?.postMessage(message, 'https://utteranc.es');

      return;
    }

    const utterances = document.createElement('script');
    const utterancesConfig: { [key: string]: any } = {
      src: 'https://utteranc.es/client.js',
      repo: 'drakang4/blog',
      'issue-term': 'pathname',
      theme: utterancesTheme,
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    wrapper.current?.appendChild(utterances);
    initialzied.current = true;
  }, [theme]);

  return <div ref={wrapper} className="mx-auto max-w-3xl py-4 lg:py-0" />;
};

export default Utterances;
