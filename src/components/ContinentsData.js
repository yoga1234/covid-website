import React from 'react'
import styles from './ContinentsData.module.css'

const ContinentData = () => (
  <div className={styles.continents_container}>
    <h3 className={styles.continents_title}>Data by continents</h3>
    <div className={styles.continents_card_container}>
      <div className={styles.continent_card}>
        <h3 className={styles.continent_card_header}>Asia</h3>
        <div className="continent-total-country">
          <p className={styles.total_country_header}>Total Country</p>
          <p className={styles.total_country_subheader}>99</p>
        </div>
        <div className="continent-data">
          <p className={styles.continent_data_confirmed}><b>1.000.000</b> People <b>Confirmed</b></p>
          <p className={styles.continent_data_recovered}>9999 People Recovered</p>
          <p className={styles.continent_data_deceased}>9999 People Deceased</p>
        </div>
      </div>

      <div className={styles.continent_card}>
        <h3 className={styles.continent_card_header}>Asia</h3>
        <div className="continent-total-country">
          <p className={styles.total_country_header}>Total Country</p>
          <p className={styles.total_country_subheader}>99</p>
        </div>
        <div className="continent-data">
          <p className={styles.continent_data_confirmed}>9999 People Confirmed</p>
          <p className={styles.continent_data_recovered}>9999 People Recovered</p>
          <p className={styles.continent_data_deceased}>9999 People Deceased</p>
        </div>
      </div>

      <div className={styles.continent_card}>
        <h3 className={styles.continent_card_header}>Asia</h3>
        <div className="continent-total-country">
          <p className={styles.total_country_header}>Total Country</p>
          <p className={styles.total_country_subheader}>99</p>
        </div>
        <div className="continent-data">
          <p className={styles.continent_data_confirmed}>9999 People Confirmed</p>
          <p className={styles.continent_data_recovered}>9999 People Recovered</p>
          <p className={styles.continent_data_deceased}>9999 People Deceased</p>
        </div>
      </div>
    </div>
  </div>
)

export default ContinentData