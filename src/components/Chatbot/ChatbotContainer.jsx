import { useState } from 'react';
import config from '../Chatbot/Chatbot/config';
import MessageParser from '../Chatbot/Chatbot/MessageParser';
import ActionProvider from '../Chatbot/Chatbot/actionProvider';
import Bot from '../Chatbot/Chatbot';
import Button from '../Chatbot/Button/Button';

const ChatbotContainer = () => {
  const [showBot, setShowBot] = useState(true);

  const showMeTheBot = () => {
    const bot = document.getElementById('bot');
    // eslint-disable-next-line
    {
      showBot ? setShowBot(false) : setShowBot(true);
    }
    if (showBot) {
      // bot.setAttribute('data-aos','fade-right');
      bot.classList.add('showBot');
      //   setAnimated(false)
    } else {
      // bot.setAttribute('data-aos','');
      bot.classList.remove('showBot');
      //   setAnimated(true)
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
