
import React, { useEffect, useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './paper.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { FetchData } from './FetchData'
import handleChange from './CountryPicker';


const useStyles = makeStyles((theme) => ({
  root: {
      display:'flex',
      flexDirection:'row',
      
       marginTop: 50,
       justifyContent:'center',
       margin:70,

  },
  paper: {

    padding: theme.spacing(6),
    textAlign: 'center',

  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',


  },
});



export default function FullWidthGrid({data:{confirmed,deaths,recovered}}) {

const classes = useStyles();
const classtypography = useStylesTypography();
// const [load, setLoad] = useState(false);
// const [global, setGlobal] = useState();
  

//   useEffect(() => {

//     const fetchData = async () => {
//     const data = await FetchData();
//       setGlobal(data);

//       setLoad(true);
//     }

//     fetchData();

//   }, [])

  if (!confirmed) {
    return (
      <div className={classes.root}>
        <Paper elevation={0} >
          <h1>Loading....</h1>
        </Paper>
      </div>
    );
  } else {



    return (
      <div className={classes.root}>

        <Grid container spacing={3} justify='center'>

          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} elevation={3} style={{ borderBottom: '10px solid orange' }} >
              <div className={classtypography.root}>
                <Typography variant="h4" gutterBottom >
                  Confirmed
             </Typography>
                <Typography variant="subtitle2" variant="h5" gutterBottom style={{ color: 'orange' }}>
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={1.75}
                    separator=","
                  ></CountUp>
                </Typography>
              </div>
            </Paper>
          </Grid>
        


        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} elevation={3} style={{ borderBottom: '10px solid green' }}>
            <div className={classtypography.root}>
              <Typography variant="h4" gutterBottom >
                Recovered
           </Typography>
              <Typography variant="subtitle2" variant="h5" gutterBottom style={{ color: 'green' }}>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1.75}
                  separator=","
                ></CountUp>
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} elevation={3} style={{ borderBottom: '10px solid red' }}>
            <div className={classtypography.root}>
              <Typography variant="h4" gutterBottom >
                Deaths
           </Typography>
              <Typography variant="subtitle2" variant="h5" gutterBottom style={{ color: 'red' }}>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={1.75}
                  separator=","
                ></CountUp>
              </Typography>
            </div>
          </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}

