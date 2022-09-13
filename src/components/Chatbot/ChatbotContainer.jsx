/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/actionProvider';
import Bot from './Chatbot';
import Button from './Button/Button';

const ChatbotContainer = () => {
  const [showBot, setShowBot] = useState(true);

  const showMeTheBot = () => {
    const bot = document.getElementById('bot');

    showBot ? setShowBot(false) : setShowBot(true);

    if (showBot) {
      bot.classList.add('showBot');
    } else {
      bot.classList.remove('showBot');
    }
  };

  return (
    <>
      <div className="bot" id="bot">
        <Bot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
      <Button showMeTheBot={showMeTheBot} />
    </>
  );
};

export default ChatbotContainer;
