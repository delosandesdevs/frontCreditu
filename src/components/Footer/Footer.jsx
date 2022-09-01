import './Footer.scss'
import isotipo from '../../assets/miscellaneous/isotipo_verde.png'
import line from '../../assets/miscellaneous/footer-line.png'

const Footer = () => {
    return <div className='footer-cmp'>
        <img src={line} alt="line" />
        <div className="footer">
            Desarrollado por De Los Andes
            <img src={isotipo} alt="isologo_img" />
        </div>
    </div>
}


export default Footer;