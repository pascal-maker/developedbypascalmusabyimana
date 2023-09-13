// alan-client.js
import alanBtn from '@alan-ai/alan-sdk-web';

const initializeAlanAI = () => {
  alanBtn({
    key: 'd501d0662e8b58268af62758b96035122e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand: (commandData) => {
      if (commandData.command === 'go:back') {
        // Call the client code that will react to the received command
      }
    }
  });
};

export default initializeAlanAI;
