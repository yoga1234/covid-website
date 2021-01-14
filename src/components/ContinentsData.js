import React from 'react'
import ContinentCardLoader from './ContinentCardLoader'

import styles from './ContinentsData.module.css'

const ContinentData = (props) => (
  <div className={styles.continents_container}>
    <h3 className={styles.continents_title}>Data by continents</h3>
    <div className={styles.continents_card_container}>

      <ContinentCardLoader CovidData={props} />      

    </div>
  </div>
)

export default ContinentData