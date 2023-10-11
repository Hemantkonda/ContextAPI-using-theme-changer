import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/themeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkMode = ()=>{
    setThemeMode('bg-black')
  }

  // Actual theme change

  useEffect(()=>{
     document.querySelector('.card').classList.add(themeMode);

  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightTheme}}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
