import React from 'react'
import styles from './MostAffected.module.css'

const MostAffected = () => (
  <div className="most-affected-container">
    <h3 className={styles.most_affected_title}>Most Affected Country</h3>
    <div className="most-affected-container">
      <div className="most-affected-card">
        <h3>Afganistan from continent Asia</h3>
        <div className="most-affected-data">
          <div className="affected-confirmed">
            <p>99999</p>
            <p>Confirmed</p>
          </div>
          <div className="affected-recovered">
            <p>99999</p>
            <p>Confirmed</p>
          </div>
          <div className="affected-deaths">
            <p>99999</p>
            <p>Confirmed</p>
          </div>
          <div className="affected-population">
            <p>99999</p>
            <p>Confirmed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MostAffected