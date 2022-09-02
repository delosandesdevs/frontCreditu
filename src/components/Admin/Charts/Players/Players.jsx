import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlayers } from '../../../../redux/action';
 
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
const Players = () => {

    const dispatch = useDispatch()

    const [countPlayers, setCountPlayers] = useState(0)

     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Cantidad de árboles plantados',
          },
        },
      };

      const allPlayers = useSelector(store => store.allPlayers)

      useEffect(() => {
        // dispatch(getAllPlayers())
      },[])

      useEffect(() => {
        console.log(allPlayers)
        setCountPlayers(allPlayers.length)
      },[allPlayers])

      const fakeUsers = [
        {
            "id": "214a0915-c72c-4508-8eca-561426e6f005",
            "nickname": "Aaron",
            "score": 9965,
            "status": "oro",
            "avatar": "/images/avatar-07.png",
            "galeria": [58,232,1,9],
            "createdAt": "2022-09-01T19:16:11.384Z",
            "updatedAt": "2022-09-01T19:16:11.384Z"
        },
        {
            "id": "6ef7c162-84c9-4c5b-bb51-37cb1c37398b",
            "nickname": "Beau",
            "score": 9963,
            "status": "oro",
            "avatar": "/images/avatar-06.png",
            "galeria": null,
            "createdAt": "2022-09-01T19:16:11.304Z",
            "updatedAt": "2022-09-01T19:16:11.304Z"
        },
       
        {
            "id": "5e8cf8d9-4b23-4170-90b9-82fb5923002f",
            "nickname": "Leo",
            "score": 9958,
            "status": "oro",
            "avatar": "/images/avatar-03.png",
            "galeria": [3,5],
            "createdAt": "2022-09-01T19:16:11.307Z",
            "updatedAt": "2022-09-01T19:16:11.307Z"
        },
        {
            "id": "a058c9dc-271f-4774-9f34-debe021e432b",
            "nickname": "Paloma",
            "score": 9956,
            "status": "oro",
            "avatar": "/images/avatar-05.png",
            "galeria": [1,4,6,2],
            "createdAt": "2022-09-01T19:16:11.465Z",
            "updatedAt": "2022-09-01T19:16:11.465Z"
        }
      ]
      
     

      //Count length of non-null key-objects
      const fake2 = allPlayers.reduce((r, o) => r + +!Object.values(o).includes(null), 0)
      
      const labels = ["Stats"];
      console.log(countPlayers)
       const data = {
        labels,
        datasets: [
          {
            label: 'Players',
            data: [countPlayers],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Fotos',
            data: [fake2],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return <div className='charts'>
        <h4 style={{margin:"20px"}}>Relación Player / Foto subida</h4>        
        <Bar options={options} data={data} />
    </div>
}

export default Players;