import leftArrow from '../../../assets/miscellaneous/arrow.png'
import rightArrow from '../../../assets/miscellaneous/arrow_derecha.png'

const NavigateBtn = ({direction, arrow}) => {
    const setImage = () =>{
       if(arrow === 'left'){
        return <>
            <img src={leftArrow} alt={`${arrow}_icon`} className='ranking-arrow' />
            <span>Anterior</span>
            </>       
       }                  

       if(arrow === 'right'){
        return <>
         <span>Siguiente</span>
         <img src={rightArrow} alt={`${arrow}_icon`} className='ranking-arrow' />
        </>
       }        
   }

    return <div className='pagination-button'>
        {setImage()}        
    </div>
}

export default NavigateBtn;