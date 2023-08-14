import React, { useEffect } from 'react';
import '@alan-ai/alan-sdk-web'; // Import the Alan SDK
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      alanBtn({
        key: '474d9c872d0411af8af62758b96035122e956eca572e1d8b807a3e2338fdd0dc/stage', // Replace with your API key
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
      });
    }
  }, []); // Empty dependency array to ensure it runs once

  return <Component {...pageProps} />;
}

export default MyApp;
