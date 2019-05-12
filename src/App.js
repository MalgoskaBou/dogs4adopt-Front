import React from "react"
import Header from "./Components/Header/Header"
import SearchingBox from "./Components/SearchingBox/SearchingBox"
import MapButton from "./Components/MapButton/MapButton"
import DogCardsBar from "./Components/DogCardsBar/DogCardsBar"

import "./styles.css";

const App = () => (
      <>
        <Header />
        <div className = 'filtersBar'>
            <SearchingBox/>
            <MapButton />
        </div>
        <DogCardsBar />
        <button>Zobacz więcej</button>
      </>
    )
  
  export default App