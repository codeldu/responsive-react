import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='parent'>
          <div className='right'>
            <img src="https://softivuspro.com/accupay/main/assets/images/solution_illustrations.png" alt="" />
          </div>
          <div className='left'>
            <h1>Consolidate Payroll Processing</h1>
            <p>We have designed a fast and effective payroll system that streamlines your payment process.</p>
            <div className='content'>
              <div className="contentWrapper">
                <div className='contentElement'>
                    <div className='icons'>i</div>
                    <h3>
                      Text
                    </h3>
                </div>
                <div className='contentElement'>
                <div className='icons'>i</div>
                    <h3>
                      Text
                    </h3>
                </div>
              </div>
              <div className="contentWrapper">
                <div className='contentElement'>
                <div className='icons'>i</div>
                    <h3>
                      Text
                    </h3>
                </div>
                <div className='contentElement'>
                <div className='icons'>i</div>
                    <h3>
                      Text
                    </h3>
                </div>
              </div>
            </div>
            <button className='btn'>  Contact Us</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="parent-two">
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
        </div>
      </div>
    </>
  )
}

export default App
