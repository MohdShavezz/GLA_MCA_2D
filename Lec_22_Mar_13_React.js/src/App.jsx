import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Project from './components/Project'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
       <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/todos">Todos</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
        {/* /about/users or /about/project */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} > 
            <Route path="users" element ={<User/>} />
            <Route path="project" element ={<Project/>} />
         </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:userId" element={<Contact />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
