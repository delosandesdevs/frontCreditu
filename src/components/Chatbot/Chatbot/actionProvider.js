class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  helloWorldHandler = () => {
    const message = this.createChatBotMessage(
      'Hola usuario👋! Hay algo en lo que te pueda ayudar?'
    );
    this.setChatbotMessage(message);
  };

  byeHandler = () => {
    const message = this.createChatBotMessage(
      'Veo que te vas. Disfruta el día!'
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };

  thanksHandler = () => {
    this.message = this.createChatBotMessage(
      'No hay problema 🤙! Si hay algo más en lo que pueda ayudarte, dímelo 😉'
    );
    this.setChatbotMessage(this.message);
  };

  helpHandler = () => {
    this.message = this.createChatBotMessage(
      'Somos Free Forest, un juego que nadie pierde. Cada jugador para ganar puntos tiene que plantar un árbol, cuantos más árboles plante, más puntos tendrá (y más oxígeno limpio tendrá nuestro planeta!)'
    );
    this.setChatbotMessage(this.message);
    this.message2 = this.createChatBotMessage(
      "Algunas de las opciones que puedas consultar aquí son: 'Ayuda', 'Acerca de','Contacto', 'Juego'."
    );
    this.setChatbotMessage(this.message2);
  };

  aboutHandler = () => {
    this.message = this.createChatBotMessage(
      'Somos Free Forest, un juego que nadie pierde. Cada jugador para ganar puntos tiene que plantar un árbol, cuantos más árboles plante, más puntos tendrá (y más oxígeno limpio tendrá nuestro planeta!)'
    );
    this.setChatbotMessage(this.message);
  };

  contactHandler = () => {
    this.message = this.createChatBotMessage(
      'Si quieres contactarte con el equipo de Free Forest, puedes hacerlo enviando un correo a freeforestgame@gmail.com'
    );
    this.setChatbotMessage(this.message);
  };

  gameHandler = () => {
    this.message = this.createChatBotMessage(
      'Este juego consta de que cada player registrado, plante árboles 🌳 en su zona permitida más cercana. Cada plantación que haga será retratada 🤳 y subida a nuestra plataforma!. Cuanto más plante el player, más puntos obtendrá! Los premios son variados, como bicicletas 🚲, set de macetas, packs de alimentos naturales 🍒🥦🌽🧄 y más!. Juguemos ayudando 🤩. '
    );
    this.setChatbotMessage(this.message);
  };
}

export default ActionProvider;
