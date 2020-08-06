import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {FetchCountry} from './FetchData'
import { FetchData } from './FetchData'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
    minWidth: 320,
  },
  contain: {
    display:'flex',
    justifyContent:'center'
  },
}));

  export default function CountryPicker({handleCountryChange}) {
    console.log(handleCountryChange)
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [load, setLoad] = useState(false);
   useEffect(() => {
          const fetchCount = async () =>{
          const data = await FetchCountry();
          setLoad(true)
          setState(data);
           
        }

          fetchCount();

  }, [])
  



  const handleChange = async (event) => {
    const name = event.target.value;
     handleCountryChange(name);
  };


  if (!load) {
    return (

        <div>
          <h1>Loading....</h1>
      </div>
    )

  } else {
  return (
    <div className={classes.contain}>
      
      <FormControl className={classes.formControl}>
      
        <NativeSelect
          onChange={handleChange}
        >
         
          <option value='' >Global</option>
            {state.map( (ind) => <option value={ind}>{ind}</option>)}
        </NativeSelect>

      </FormControl>


     
    </div>
  );
}

}