import React from 'react'
import styles from './HeroText.module.css'

const HeroText = () => (
  <div className={styles.hero_container}>
    <p className={styles.hero_header}>CORONAVIRUS CONFIRMED DATA</p>
    <p className={styles.hero_sub_header}>Created by <span className={styles.text_blue}>Yogasmara</span>, data by <span className={styles.text_red}>M Media Group</span></p>
  </div>
)

export default HeroText