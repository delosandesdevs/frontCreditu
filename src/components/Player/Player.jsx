import './Player.scss'

const Player = ({ name, img, ranking, alt }) => {
    return (
        <div className="playerCard_container">
            <div className='playerCard_img_container'>
                <img src={img} alt={`${name}_${alt}`} />
            </div>
            <div className='playerCard_text_container'>
                <h4>Position</h4>
                <h3>{name}</h3>
                <p>{ranking}</p>
            </div>
        </div>
    )
}

export default Player