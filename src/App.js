import React from 'react';
import './App.css';
import NavBar from './AppBar.js'
import FullWidthGrid from './paper.js'
import CountryPicker from './CountryPicker';
import Linee from './Chart.jsx';
import {FetchData} from './FetchData'
import handleChange from './CountryPicker'


class App extends React.Component {

  state ={
    data:{},
    country:''
  }
  
async componentDidMount(){
  const Fetchdata = await FetchData();
  this.setState({data:Fetchdata})

}


 
  handleCountryChange = async (country) => {
 const data = await FetchData(country);
 this.setState({data:data,country:country});

}



  render() {


    const {data,country} = this.state;
    return (

      <div>
        <NavBar />
        <FullWidthGrid  data ={data}/>
        <CountryPicker  handleCountryChange = {this.handleCountryChange}/>
        <Linee  data ={data} country={country} />
      </div>

    )

  }

}

// function App() {
//   return (

//     <div>
//       <NavBar />
//       <FullWidthGrid />
//       <CountryPicker />
//       <Linee />
//     </div>

//   );
// }

export default App;
