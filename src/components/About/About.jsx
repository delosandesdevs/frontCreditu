import threeLogo from '../../assets/miscellaneous/three_white.png'
import aboutLogo from '../../assets/miscellaneous/logo_white.png'
import aboutTeam from '../../assets/avatars/profile.png'
import './About.scss'
import Avatar from '../Avatar/Avatar'
import { useEffect } from 'react'
import Aos from 'aos'

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const team = ['Rami', 'Flor', 'Rodri', 'Juano', 'Gian']

    return (
        <div className='about'>
            <div className='about_container'>
                <div className="about_logo">
                    <img src={threeLogo} alt="three_logo_img" className='three-logo' />
                    <img src={aboutLogo} alt="home_logo_img" className='about-logo' />
                </div>
                <div className='about-text_container' data-aos="fade-up" data-testid={'about'} >
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
                        Elegirás un bosque para reforestar según tu ubicación para que crezca. Alimentaras, les darás sol, lo regarás, lo cuidarás de plagas y aprenderás datos de árboles super curiosos en la aplicación interactuando con mini juegos de acción y rompecabezas forestales super divertidos para mantenerlo saludable y feliz.
                        </p>
                        <p>
                        Puedes experimentar con comprar nutrientes para tu bosque para que crezcan velozmente.                        </p>
                        <p>
                        Una vez que haya nutrido sus árboles desde plántulas hasta árboles adultos, puedes enviarlos a una arboleda junto a una donación para plantarlos en el mundo real.  En Free Forest tenemos como objetivo final, lograr plantar 1 millón de árboles con tu ayuda.
                                              </p>
                    </div>
                </div>
                <div className='about-team'>
                    <h1 className='about-team-title'>DESARROLLADORES FREE FOREST</h1>
                    <div className='about-team-avatar'>
                    <Avatar pic={'rami'} displayName={'Rami'} />
                    <Avatar pic={'gian'} displayName={'Gian'} />
                    <Avatar pic={'juano'} displayName={'Juano'} />
                    <Avatar pic={'rodri'} displayName={'Rodri'} />
                    <Avatar pic={'flor'} displayName={'Flor'} />                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About