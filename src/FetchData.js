import React from 'react'
import axios from 'axios';

export const FetchData = async (country) => {
        console.log(typeof(country))
    let url = 'https://covid19.mathdro.id/api';
        if(country)
            {
                url=`${url}/countries/${country}`;
            }
   
    try {
        const response = await fetch(url);
        const { confirmed, deaths, recovered } = await response.json();
        const modifyData = {
            confirmed,
            deaths,
            recovered
        }
        return modifyData;

    } catch (error) {
        console.log(error)
    }

}


export const FetchDaily = async () => {
  try {
      const response = await fetch('https://covid19.mathdro.id/api/daily')
      const data = await response.json();
      return data;

  } catch (error) {
      return error;
  }
    
}



export const FetchCountry =  async () => {
    try {
        const response = await fetch("https://covid19.mathdro.id/api/countries");
        const {countries} = await response.json();
           const arrayOfCountries= countries.map((ind)=> ind.name)
           return arrayOfCountries;
        
    } catch (error) {
        console.log(error)
    }
}



