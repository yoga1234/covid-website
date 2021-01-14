import React from 'react'

import styles from './ContinentsData.module.css'
import Color from './Color.module.css'

const CardGenerator = (data) => {
  data = data.CovidData.data
  // console.log(data)
  let dataObject = {

  }
  // let stringReturn = ''

  // counting total country in continent
  for (let i in data) {
    if (dataObject.hasOwnProperty(data[i].All.continent)) {
      dataObject[data[i].All.continent]++
    } else {
      dataObject[data[i].All.continent] = 1
    }

    console.log(dataObject)
  }

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