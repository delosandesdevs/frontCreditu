import './Ranking.scss'
import gold from '../../assets/miscellaneous/oro.png'
import silver from '../../assets/miscellaneous/plata.png'
import bronze from '../../assets/miscellaneous/bronce.png'
import leftArrow from '../../assets/miscellaneous/arrow.png'
import rightArrow from '../../assets/miscellaneous/arrow_derecha.png'


const Ranking = () => {
    return <div className="ranking">
        <form className='ranking-search'>
            <input type="text" id='player' placeholder='Ingrese player a buscar' />
            <button className='btn btn-ff'>Buscar</button>
        </form>

        <div className="ranking-table ">
        <table class="table table-borderless table-striped ranking-t">
            <thead className='ranking-header'>
                <tr>
                <th scope="col">
                    <div id='v-align'>
                    <span class="material-symbols-outlined">arrow_downward</span>Puesto

                    </div>
                    </th>
                <th scope="col">Nombre</th>
                <th scope="col">Status</th>
                <th scope="col">Puntos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td><img src={gold} alt="trophy_gold_icon" className='ranking-status' /></td>
                <td>9000</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td><img src={silver} alt="trophy_gold_icon" className='ranking-status' /></td>
                    <td>5211</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Frank</td>
                    <td><img src={bronze} alt="trophy_gold_icon" className='ranking-status' /></td>
                    <td>666</td>
                </tr>
               
            </tbody>
            </table>
        

            <div className="pagination">
                <div className='pagination-button'>
                    <img src={leftArrow} alt="left-arrow-img" className='ranking-arrow' />
                    <span>Anterior</span>
                </div>

                <div className='pagination-button'>
                    <span>Siguiente</span>
                    <img src={rightArrow} alt="left-arrow-img" className='ranking-arrow' />
                </div>
                
            </div>
        </div>
    </div>
}

export default Ranking;