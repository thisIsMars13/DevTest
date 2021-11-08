import React from 'react';
import { Bar } from 'react-chartjs-2';


const Charts = (props) => {

    // Prepare chart data
    let data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          type: 'bar',
          label: 'Expense',
          backgroundColor: 'rgb(255, 99, 132)',
          data: props.data ? Object.values(props.data.expenses): [],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Income',
          backgroundColor: 'rgb(75, 192, 192)',
          data: props.data ? Object.values(props.data.income): [],
        },
      ]
    };

    // Return chart
    return (
        <Bar data= {data} />
    )
}

export default Charts
