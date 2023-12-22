import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function Topbar() {
  return (
    <div className="Topbar">
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Routes>
        <Route path="home" Component={ Home } />
        <Route path="about" Component={ About } />
        <Route path="contact" Component={ Contact } />
      </Routes>
      {/*
        <Routes>
          <Route path="home" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      */}
    </div>
  )
}

export default Topbar;