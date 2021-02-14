const React = require('react');

const PreBodyComponent = [
  <script
    key="dark-mode"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var theme;
          try {
            theme = localStorage.getItem('theme');
          } catch (error) { }
          var darkQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if ((!theme && darkQuery) || theme === 'dark') {
            document.documentElement.classList.add('dark');
          }          
        })();`,
    }}
  />,
];

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(PreBodyComponent);
};
