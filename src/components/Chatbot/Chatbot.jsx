import Chatbot from 'react-chatbot-kit';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/actionProvider';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.scss';

const Bot = () => (
  <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
  />
);

export default Bot;
