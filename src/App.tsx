import reactLogo from './assets/react.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Physically Simulated Characters</h1>
      <div className="card">
        <div className='card-item'>
        <p style={{'textAlign': 'justify', 'width': '600px'}}>
          This is a evualuation app for the Physically Simulated Characters project.
          Please look at the following videos and choose the one that looks <b>more natural</b>.
          Goal of the is to follow target directions given by blue and red markers. <b>Blue marker</b> dictates direction in which the charater <b>should look</b>. <b>Red marker</b> dictates direction which the character <b>should move</b>.
          Videos will be played only two times so pay attention ;)<br/>
        </p>
        <button onClick={() => navigate('/eval')}>
          Let's go!
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
