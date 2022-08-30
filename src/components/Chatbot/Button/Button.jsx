const Button = ({showMeTheBot}) =>{
    return  <button className={`chatbot chat-button`} onClick={showMeTheBot}>
    <span className="material-symbols-outlined">
        forest
    </span>
    ForestChat
</button>
}

export default Button;