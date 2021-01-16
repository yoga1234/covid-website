import React, { Component } from 'react'
import ContinentCardLoader from './ContinentCardLoader'

import styles from './ContinentsData.module.css'
import Color from './Color.module.css'

class ContinentData extends Component {

  dataCounter = (data) => {
    let dataObject = []
    
    // looping all data
    for (let i in data) {
      let dataExists = 'no'
      // check if the dataObject has data[i] name
      
      if (data[i].All.continent !== undefined) { // check if this is not country data
        dataObject.forEach(function(continent) { // loop for the data
            if(
              continent.hasOwnProperty("continentName") &&
              continent.continentName === data[i].All.continent
            ) {
              dataExists = 'yes'
            }
        })

        // if data exists, add the particular data
        // if no create new data.

        if (dataExists === 'no') {
          dataObject.push({
            "continentName": data[i].All.continent,
            "totalConfirmed": data[i].All.confirmed,
            "totalDeaths": data[i].All.deaths,
            "totalRecovered": data[i].All.recovered,
            "totalCountries": 1
          })
        } 
        if (dataExists === 'yes') {
          dataObject.forEach(continent => {
            if (continent.continentName === data[i].All.continent) {
              continent.totalConfirmed += data[i].All.confirmed
              continent.totalDeaths += data[i].All.deaths
              continent.totalRecovered += data[i].All.recovered
              continent.totalCountries += 1
            }
          });

          dataExists = 'no'
        }

      }

    }
    
    // console.log('data object', dataObject)
    return dataObject
  }

  changeNumber = (num) => {
    if (num > 1000000) {
      num = Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'
    } else if (num > 1000) {
      num = Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K'
    }

    return num
  }

  render() {
    let dataRender = this.dataCounter(this.props.data)
    dataRender.forEach(continent => {
        continent.totalConfirmed = this.changeNumber(continent.totalConfirmed)
        continent.totalDeaths = this.changeNumber(continent.totalDeaths)
        continent.totalRecovered = this.changeNumber(continent.totalConfirmed)
    })

    return (
      <div className={styles.continents_container}>
        <h3 className={styles.continents_title}>Data by continents</h3>
        <div className={styles.continents_card_container}>

          {
            dataRender.map((continent, index) => (
              <div key={index} className={styles.continent_card}> {/* card start from here */}
                <h3 className={styles.continent_card_header}>{continent.continentName}</h3>
                <div>
                  <p className={styles.total_country_header}>Total Country</p>
                  <p className={styles.total_country_subheader}>{continent.totalCountries}</p>
                </div>
                <div>
                  <p className={styles.continent_data_confirmed}><b>{continent.totalConfirmed}</b> People <b className={Color.text_black}>Confirmed</b></p>
                  <p className={styles.continent_data_recovered}><b>{continent.totalRecovered}</b> People <b className={Color.text_green}>Recovered</b></p>
                  <p className={styles.continent_data_deceased}><b>{continent.totalDeaths}</b> People <b className={Color.text_white}>Deceased</b></p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    )
  }
}

export default ContinentData
