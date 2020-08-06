import React, { useState,useEffect } from 'react';
import { Line,Bar } from 'react-chartjs-2';
import { FetchDaily } from './FetchData'
import Grid from '@material-ui/core/Grid';

import './paper.css';


function Linee({data:{confirmed,deaths,recovered},country}) {
  //console.log(typeof(country))

  const [daily, setdaily] = useState([])
  const [load, setload] = useState(false)
  useEffect(() => {
    const FetchDailyData = async () => {
      const data = await FetchDaily();

      setload(true);
      setdaily(data);

    }

    FetchDailyData();
  }, [])

  const lineChart = (
    daily?(
    <Line data={{
      labels: daily.map((ind)=>ind.reportDate),
      datasets: [
        {
          label: 'Confirmed',
          data: daily.map((ind)=>ind.totalConfirmed),

          fill: false,
          maintainAspectRatio: false,
          lineTension: 0.1,
          responsive:true,
          backgroundColor: 'red',
          borderColor: 'blue',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.1,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10

        },
        {
          label: 'Deaths',
          data: daily.map((ind)=>ind.deaths.total),

          fill: false,
          lineTension: 0.1,
          backgroundColor: 'red',
          borderColor: 'red',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.1,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10

        }
      ]
    }} />
  ):null
  );


  const BarChart = (
    confirmed? (
    <Bar
          data={ {
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor:  ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [confirmed.value, recovered.value, deaths.value]
              }
            ]
          }}
        

          options={{
            legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
          
          }}
        />
    ):null


  );
        
    
 

  if (!load) {
    return (

        <div>
          <h1>Loading....</h1>
      </div>
    );
  } else {

    return (
      <div className='container'>

         <Grid container spacing={3}>
         <Grid item xs={12} md={12}>
          {country?BarChart:lineChart}
        </Grid>
        </Grid>
      </div>
    );
  }
}
export default Linee;


// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// export default React.createClass({
//   displayName: 'BarExample',

//   render() {
//     return (
//       <div>
//         <h2>Bar Example (custom size)</h2>
//         <Bar
//           data={data}
//           width={100}
//           height={50}
//           options={{
//             maintainAspectRatio: false
//           }}
//         />
//       </div>
//     );
//   }
// });