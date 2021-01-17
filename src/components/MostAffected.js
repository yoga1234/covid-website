import React, { Component } from 'react'
import styles from './MostAffected.module.css'
import Color from './Color.module.css'

class MostAffected extends Component {

  fiveCountry = (data) => {
    let maxCountry = 5
    let countryData = []

    for (let i in data) {
      if (data[i].All.continent !== undefined) {

        if (countryData.length === 0) {
          countryData.push({
            "countryName": data[i].All.country,
            "continentName": data[i].All.continent,
            "confirmed": data[i].All.confirmed,
            "recovered": data[i].All.recovered,
            "deaths": data[i].All.deaths,
            "population": data[i].All.population
          })
        } else {
          // sort based on confirmed
          for (let j = 0; j < countryData.length; j++) {
            if (
              countryData[j].confirmed > data[i].All.confirmed &&
              countryData.length < maxCountry
            ) {
              console.log('1 ' + countryData[j].confirmed + ' > ' + data[i].All.confirmed)
              countryData.push({
                "countryName": data[i].All.country,
                "continentName": data[i].All.continent,
                "confirmed": data[i].All.confirmed,
                "recovered": data[i].All.recovered,
                "deaths": data[i].All.deaths,
                "population": data[i].All.population
              })
              break
            } else if (
              countryData[j].confirmed < data[i].All.confirmed &&
              countryData.length < maxCountry
            ) {
              console.log('2 ' + countryData[j].confirmed + ' < ' + data[i].All.confirmed)
              countryData.splice(j, 1, {
                "countryName": data[i].All.country,
                "continentName": data[i].All.continent,
                "confirmed": data[i].All.confirmed,
                "recovered": data[i].All.recovered,
                "deaths": data[i].All.deaths,
                "population": data[i].All.population
              })
              break
            } else if (
              countryData[j].confirmed < data[i].All.confirmed &&
              countryData.length > maxCountry
            ) {
              console.log('3 ' + countryData[j].confirmed + ' < ' + data[i].All.confirmed)
              countryData.splice(j, 1, {
                "countryName": data[i].All.country,
                "continentName": data[i].All.continent,
                "confirmed": data[i].All.confirmed,
                "recovered": data[i].All.recovered,
                "deaths": data[i].All.deaths,
                "population": data[i].All.population
              })
            countryData.pop()
            break
            }
          }
        }
      }
    }

    return countryData
  }

  render() {
    let countryData = this.fiveCountry(this.props.data)
    console.log(countryData)
    return (
      <div>
        <h3 className={[styles.most_affected_title, Color.text_black].join(" ")}>Most Affected Country</h3>
        <div>

          {
            countryData.map((country, index) => (
              <div className={styles.most_affected_card} key={index}>
                <h3 className={[styles.affected_card_title, Color.text_black].join(" ")}><b>{country.countryName}</b> from continent <b>{country.continentName}</b></h3>
                <div className={styles.most_affected_data}>
                  <div>
                    <p className={[styles.data_number, Color.text_black].join(" ")}>{country.confirmed}</p>
                    <p className={[styles.data_title, Color.text_black].join(" ")}>Confirmed</p>
                  </div>
                  <div>
                    <p className={[styles.data_number, Color.text_green].join(" ")}>{country.recovered}</p>
                    <p className={[styles.data_title, Color.text_black].join(" ")}>Recovered</p>
                  </div>
                  <div>
                    <p className={[styles.data_number, Color.text_red].join(" ")}>{country.deaths}</p>
                    <p className={[styles.data_title, Color.text_black].join(" ")}>Deaths</p>
                  </div>
                  <div>
                    <p className={[styles.data_number, Color.text_blue].join(" ")}>{country.population}</p>
                    <p className={[styles.data_title, Color.text_black].join(" ")}>Population</p>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
   </div>
    )
  }
}

export default MostAffected
