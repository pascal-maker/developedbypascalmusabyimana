// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import '../styles/CustomCopilot.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
