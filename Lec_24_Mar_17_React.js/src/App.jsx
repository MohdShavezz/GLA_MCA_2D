import React, { lazy, Suspense } from 'react'
import Expensive from './Expensive'
import Parent from './Parent'
import Navbar from './Navbar'
const Dashboard = lazy(() => import('./Dashboard'))

function App() {
  return (
    <div>
    <Navbar/>
      App
      <Expensive/>
      <Parent/>
     <Suspense fallback={<h3>Loading...</h3>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default App
