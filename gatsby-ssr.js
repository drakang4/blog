/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it
import React from 'react';

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <div key="fb-root" id="fb-root" />,
    <script
      key="fb-sdk"
      dangerouslySetInnerHTML={{__html: `
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.12&appId=191342008318335&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `}}
    />
  ]);
};