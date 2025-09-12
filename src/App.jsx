import { React } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import IconsProvider from './components/IconsProvider/IconsProvider.jsx'

function App() {

  return (
    <IconsProvider>
    <main> 
      <Header/>
    </main> 
    </IconsProvider>
  )
}

export default App
