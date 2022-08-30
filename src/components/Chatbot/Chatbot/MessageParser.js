class MessageParser{
    constructor(actionProvider, state){
        this.actionProvider = actionProvider
        this.state = state
    }

    
    parse(message){
        const saludos = ['saludame','hola','holi', 'holu','buen día','buenas tardes', 'buenas noches','hello']
        const bye = ['chau','adios', 'hasta luego']
        const thanks = ['gracias','agradezco','amable']
 
        let lowercase = message.toLowerCase();
        

        for (let i = 0; i < saludos.length; i++) {
            if(lowercase.includes(saludos[i]))
                this.actionProvider.helloWorldHandler()
        }

        for (let i = 0; i < thanks.length; i++) {
            if(lowercase.includes(thanks[i]))
                this.actionProvider.thanksHandler()
        }

        for (let i = 0; i < bye.length; i++) {
            if(lowercase.includes(bye[i]))
                this.actionProvider.byeHandler()
        }      
                

        if(lowercase.includes('ayuda'))
            this.actionProvider.aboutHandler()
        
            if(lowercase.includes('acerca'))
            this.actionProvider.aboutHandler()

        if(lowercase.includes('contact'))
            this.actionProvider.contactHandler()
        
        if(lowercase.includes('juego'))
            this.actionProvider.gameHandler()
        
    }
}

export default MessageParser;