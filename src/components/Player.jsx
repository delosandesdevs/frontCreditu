export function Player({name, img, ranking, alt}){
    return <div>
        <h4>{name}</h4>
        <img src={img} alt={`${name}_${alt}`} />
        <p>{ranking}</p>
    </div>
}