import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Players = () => {
  const [countPlayers, setCountPlayers] = useState(0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Cantidad de árboles plantados'
      }
    }
  };

  const allPlayers = useSelector((store) => store.allPlayers);

  useEffect(() => {}, []);

  useEffect(() => {
    setCountPlayers(allPlayers.length);
  }, [allPlayers]);

  const fake2 = allPlayers.reduce(
    (r, o) => r + +!Object.values(o).includes(null),
    0
  );

  const labels = ['Stats'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Players',
        data: [countPlayers],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Fotos',
        data: [fake2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <div className="charts">
      <h4 style={{ margin: '20px' }}>Relación Player / Foto subida</h4>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Players;
