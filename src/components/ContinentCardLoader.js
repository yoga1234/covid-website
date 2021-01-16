import React from 'react'

import styles from './ContinentsData.module.css'
import Color from './Color.module.css'

const dataCounter = (data) => {
  let dataPush = []
  let testPush = {}

  // loop data json
  for (let i in data) {
    // loop untuk memeriksa apakah data sudah ada
    for (let j = 0; j < dataPush.length; j++) {
      if(dataPush[j].hasOwnProperty(data[i].All.continent) === false){
        testPush.continentName = data[i].All.continent
        testPush.totalConfirmed = data[i].All.confirmed
      }
    }
  }
}

const ContinentCardLoader = (props) => (
  <div className={styles.continent_card}>
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