import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"

import { useState } from "react"

function App() {
  const [ selectedPokemon, setSelectedPokemon ] = useState(0)
  const [ showSideMenu, setShowSideMenu ] = useState(false) // does the opposite of waht it says false is true

  function handleToggleFunction() {
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <>
      <Header handleToggleFunction={handleToggleFunction} />
      <SideNav 
        showSideMenu={showSideMenu} 
        handleCloseMenu={handleCloseMenu} 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
