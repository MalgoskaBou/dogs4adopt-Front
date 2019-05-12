import React from 'react'
import DogCard from '../DogCard/DogCard'
import styles from './DogCardsBar.module.css'

const DogCardsBar = () => (
 <div className = {styles.DogCardsBarWrapper}>
    <DogCard/>
    <DogCard/>
    <DogCard/>
    <DogCard/>
    <DogCard/>
 </div>
)

export default DogCardsBar