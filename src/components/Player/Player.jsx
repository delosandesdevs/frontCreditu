import './Player.scss';

const Player = ({ position, name, img, ranking, alt, size }) => (
  <div className={`playerCard_container ${size && 'small'}`}>
    <div
      className={`playerCard_img_container  ${size && 'small'} ${
        (position === 1 && 'one reflect-gold') ||
        (position === 2 && 'two reflect-silver') ||
        (position === 3 && 'three reflect-bronze')
      }`}
    >
      <img src={img} alt={`${name}_${alt}`} />
    </div>
    <div className={`playerCard_text_container ${size && 'small'}`}>
      <h4
        className={`playerCard_text_position ${size && 'small'} ${
          (position === 1 && 'p-one') ||
          (position === 2 && 'p-two') ||
          (position === 3 && 'p-three')
        }`}
      >
        {position}° Puesto
      </h4>
      <h3 className={`playerCard_text_name ${size && 'small'}`}>{name}</h3>
      <p className={`playerCard_text_ranking ${size && 'small'}`}>
        {ranking} puntos
      </p>
    </div>
  </div>
);

export default Player;
