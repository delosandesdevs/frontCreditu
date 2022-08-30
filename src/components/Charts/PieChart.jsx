import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './PieChart.scss'
import { useEffect } from 'react';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const PieChart = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
      }, [])

    const data = {
        labels: ['Air in planet', 'Renewed air'],
        datasets: [
          {
            label: ['90%', '10%'],
            data: [90, 10],
            backgroundColor: [
              'lightblue',
              'green',
            ],
            borderColor: [
              'blue',
              'green',
            ],
            borderWidth: 1,
          },
        ],
      };

   
      
    return <div className='pie-chart'>
      <div className='centered-line'>
        <h3><span class="material-symbols-outlined">forest</span> ¡Aire renovado          
        gracias a Free Forest! <span class="material-symbols-outlined">forest</span></h3>   
      </div>
        <p>En este juego ganamos todos.<br />Gracias a nuestros players, estamos generando una mejora en el cambio climático, logrando que se renueve el aire por los nuevos FreeTrees!</p>   
        <hr />
          <div className="circular-chart" data-aos='fade-left' data-aos-delay="600">
            <Pie data={data} />
          </div>        
    </div>
}


export default PieChart;