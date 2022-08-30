import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { BotAvatar } from "../BotAvatar/BotAvatar";

// let helpCommands = ""
const config = {
    initialMessages: [createChatBotMessage(`Bienvenido a Free Forest chat!`),createChatBotMessage("Algunas de las opciones que puedes consultar aquí son: 'Ayuda', 'Acerca de','Contacto', 'Juego'.")],
    botName: "ForestChat",
    customComponents: {
        botAvatar:(props) => <BotAvatar {...props} />
    },
    customStyles:{
        botMessageBox:{
            backgroundColor:"#EF7C80",
            color:"black"
        },
    chatButton:{
        backgroundColor:"#EF7C80"
    }
    },
    state:{
        products: []
    },
    widgets: [
        {
            widgetName: "products",           
            mapStateToProps: ["products"]
        }
    ]
  }
  
  export default config 