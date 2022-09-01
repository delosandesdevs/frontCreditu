import threeLogo from '../../assets/miscellaneous/three_white.png'
import aboutLogo from '../../assets/miscellaneous/logo_white.png'
import aboutTeam from '../../assets/avatars/profile.png'
import './About.scss'

const About = () => {

    const team = ['Rami', 'Flor', 'Rodri', 'Juano', 'Gian']

    return (
        <div className='about'>
            <div className='about_container'>
                <div className="about_logo">
                    <img src={threeLogo} alt="three_logo_img" className='three-logo' />
                    <img src={aboutLogo} alt="home_logo_img" className='about-logo' />
                </div>
                <div className='about-text_container'>
                    <div className='text'>
                        <p>
                            Atravesamos constantemente una lucha ecológica para evitar destruir el planeta de nuestros hijos, y desde nuestro humilde lugar quisimos ayudar
                            a cambiar esto de manera lúdica e innovadora.
                        </p>
                        <p>
                            En Free Forest deberás constribuir  reduciendo el dióxido de carbono, para evitar el calentamiento global y así salvar nuestro planeta.
                            Enviaremos semillas a tu hogar con las intrucciones para plantarlas y cuidarlas.
                        </p>
                        <p>
                            Cada semana nos enviaras una foto para ver el crecimiento de tu planta y así ganaras puntos, los cuales te permitirán desbloquear nuevas semillas,
                            y a fin de año a nuestros primeros diez oxigenadores les otorgaremos grandes premios.
                        </p>
                        <p>
                            Te invitamos a crear tu jugador, elegir tu avatar, tu nombre y empezar esta oxigenada aventura !!!
                        </p>
                        <p>
                            En el panel Rankings encontrarás a tus compañeros y tu puesto en el mundo de Free Forest.
                        </p>
                    </div>
                </div>
                <div className='about-team'>
                    <h1 className='about-team-title'>FREE FOREST TEAM</h1>
                    <div className='about-team-avatar'>
                        {
                            team.map((a, i) => {
                                return (
                                    <div key={i} className='avatar'>
                                        <div className='avatar-img'>
                                            <img src={aboutTeam} />
                                        </div>
                                        <p>{a}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About