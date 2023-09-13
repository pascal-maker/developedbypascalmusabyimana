import React, { useEffect } from 'react';
import '../styles/globals.css';
import initializeAlanAI from './alan-client';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // You can add your client-side code here that requires the window object
      initializeAlanAI(); // Initialize Alan AI here
    }
  }, []); // Empty dependency array to ensure it runs once

  return <Component {...pageProps} />;
}

export default MyApp;

