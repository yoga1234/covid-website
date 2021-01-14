import React from 'react'
import styles from './MostAffected.module.css'
import Color from './Color.module.css'

const MostAffected = () => (
  <div className="most-affected-container">
    <h3 className={styles.most_affected_title}>Most Affected Country</h3>
    <div className="most-affected-container">
      <div className={styles.most_affected_card}>
        <h3 className={styles.affected_card_title}><b>Afganistan</b> from continent <b>Asia</b></h3>
        <div className={styles.most_affected_data}>
          <div className="affected-confirmed">
            <p className={styles.data_number}>99999</p>
            <p className={styles.data_title}>Confirmed</p>
          </div>
          <div className="affected-recovered">
            <p className={[styles.data_number, Color.text_green].join(" ")}>99999</p>
            <p className={styles.data_title}>Recovered</p>
          </div>
          <div className="affected-deaths">
            <p className={[styles.data_number, Color.text_red].join(" ")}>99999</p>
            <p className={styles.data_title}>Deaths</p>
          </div>
          <div className="affected-population">
            <p className={[styles.data_number, Color.text_blue].join(" ")}>99999</p>
            <p className={styles.data_title}>Population</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MostAffected