import './Player.scss'

const Player = ({ name, img, ranking, alt, size }) => {
    return (
        <div className={`playerCard_container ${size && 'small'}`}>
            <div className={`playerCard_img_container ${size && 'small'}`}>
                <img src={img} alt={`${name}_${alt}`} />
            </div>
            <div className={`playerCard_text_container ${size && 'small'}`}>
                <h4>Position</h4>
                <h3>{name}</h3>
                <p>{ranking}</p>
            </div>
        </div>
    )
}

export default Player