import { useState } from "react"
import Header from "./components/header/Header"
import Introduce from "./components/Personal/Introduce"
import ListItem from "./components/Project/ListItem"
import Detail from "./components/DetailIntro/Detail"
import Contact from "./components/Contact/Contact"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const handleTheme = () => {
    setTheme(theme === 'cupcake' ? 'dark' : 'cupcake')
    localStorage.setItem('theme', theme === 'cupcake' ? 'dark' : 'cupcake')
  }

  return (
    <>
    <div className="h-screen">
      <html data-theme= {theme}>
        <div>
          <Header handleTheme={handleTheme}/>
            <Introduce theme={theme}/>
            <Detail/>
            <ListItem/>
            <Contact/>
        </div>
      </html>
    </div>
  </>
  )
}

export default App
