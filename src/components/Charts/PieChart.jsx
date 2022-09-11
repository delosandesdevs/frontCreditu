import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './PieChart.scss';

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
    Aos.init({ duration: 1000, once: true });
  }, []);

  const data = {
    labels: ['Aire en el planeta', 'Aire renovado'],
    datasets: [
      {
        label: ['90%', '10%'],
        data: [90, 10],
        backgroundColor: ['#6DCC5E', '#C65F72'],
        borderColor: ['white', 'white'],
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="chart">
      <div className="pie-chart">
        <div>
          <div className="centered-line">
            <h3>
              <span className="material-symbols-outlined">forest</span> ¡Aire
              renovado gracias a Free Forest!{' '}
              <span className="material-symbols-outlined">forest</span>
            </h3>
          </div>
          <p>
            En este juego ganamos todos.
            <br />
            Gracias a nuestros players, estamos generando una mejora en el
            cambio climático, logrando que se renueve el aire por los nuevos
            FreeTrees!
          </p>
        </div>

        <hr />
        <div className="row" id="chart-section">
          <div className="col-sm-6" data-testid='air-chart'>
            <Pie data={data} />
          </div>
          <div className="col-sm-6">
            <h4 data-aos="fade-left" data-aos-duration={3000}>
              CANTIDAD DE OXÍGENO RECUPERADO PARA NUESTRO PLANETA
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
