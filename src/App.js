import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/main/Home'
import Collections from './components/Collections'
import Men from './components/Men'
import Women from './components/Women.js'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
