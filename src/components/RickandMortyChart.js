import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function RickandMortyChart({array, unique }) {

  const data = {
      labels: unique,
      datasets: [
          {
          data: array,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(245, 40, 145, 0.2)',
              'rgba(23, 58, 172, 0.2)',
              'rgba(157, 235, 167, 0.2)',
              'rgba(157, 124, 209, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(245, 40, 145, 1)',
              'rgba(23, 58, 172, 1)',
              'rgba(157, 235, 167, 1)',
              'rgba(157, 124, 209, 1)',
          ],
          borderWidth: 1,
          },
      ],
  };

  return (
    <Pie data={data} />
  )
}

export default RickandMortyChart