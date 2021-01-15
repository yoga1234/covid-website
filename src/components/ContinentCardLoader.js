import React from 'react'

import styles from './ContinentsData.module.css'
import Color from './Color.module.css'

/*
  {
    Asia: {
      totalCountries: 10,
      totalConfirmed: 10,
      totalDeaths: 10,
      totalRecovered: 10
    }
  }
*/

const dataCounter = (data) => {
  data = data.CovidData.data
  let dataObject = {}
  for (let i in data) {
    // counting total country in continent
    if (data[i].All.continent !== undefined) {
      if (!dataObject.hasOwnProperty(`${data[i].All.continent}`)) {
        dataObject[data[i].All.continent] = {}
        dataObject[data[i].All.continent]['totalCountry'] = 1
      } else {
        dataObject[data[i].All.continent]['totalCountry']++
      }
    }

    // counting for total confirmed
    if (data[i].All.confirmed !== undefined && data[i].All.continent !== undefined) {
      if (!dataObject[data[i].All.continent].hasOwnProperty('totalConfirmed')) {
        dataObject[data[i].All.continent]['totalConfirmed'] = data[i].All.confirmed
      } else {
        dataObject[data[i].All.continent]['totalConfirmed'] += data[i].All.confirmed
      }
    }

    // counting for total deaths
    if (data[i].All.deaths !== undefined && data[i].All.continent !== undefined) {
      if (!dataObject[data[i].All.continent].hasOwnProperty('totalDeaths')) {
        dataObject[data[i].All.continent]['totalDeaths'] = data[i].All.deaths
      } else {
        dataObject[data[i].All.continent]['totalDeaths'] += data[i].All.deaths
      }
    }

    // counting for total recovered
    if (data[i].All.recovered !== undefined && data[i].All.continent !== undefined) {
      if (!dataObject[data[i].All.continent].hasOwnProperty('totalRecovered')) {
        dataObject[data[i].All.continent]['totalRecovered'] = data[i].All.recovered
      } else {
        dataObject[data[i].All.continent]['totalRecovered'] += data[i].All.recovered
      }
    }

  }

  return dataObject
}

const CardGenerator = (data) => {
  let totalCountry = dataCounter(data)
  
  console.log(totalCountry)
}

const ContinentCardLoader = (props) => (

  
  <div className={styles.continent_card}>
    {
      CardGenerator(props)
    }
    <h3 className={styles.continent_card_header}>Asia</h3>
    <div className="continent-total-country">
      <p className={styles.total_country_header}>Total Country</p>
      <p className={styles.total_country_subheader}>99</p>
    </div>
    <div className="continent-data">
      <p className={styles.continent_data_confirmed}><b>1.000.000</b> People <b className={Color.text_black}>Confirmed</b></p>
      <p className={styles.continent_data_recovered}><b>9999</b> People <b className={Color.text_green}>Recovered</b></p>
      <p className={styles.continent_data_deceased}><b>9999</b> People <b className={Color.text_white}>Deceased</b></p>
    </div>
  </div>

)

export default ContinentCardLoader