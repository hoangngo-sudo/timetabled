// import { useState } from 'react'
import './main.jsx'
import './Calendar.jsx'
import Calendar from './Calendar.jsx'

const App = () => {
  return (
    <div className='App'>
      <h1>Itinerary for 7 days in Chicago 🏙️</h1>
      <h2>One week in Chicago is wonderful. If want to get to know the city and see all the sights, then spending 7 days in Chicago is perfect!</h2>
      
      <Calendar />
    </div>
  )
}
export default App
