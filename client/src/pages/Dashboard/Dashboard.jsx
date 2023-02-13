import React from 'react'
import Main from './components/chart/Main'
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className='container'>
        <div className="content dashboard">
            <h1>Dashboard</h1>
            <Main />

            <div className="chart-options">
                <div style={{background:'rgb(254, 230, 78, 0.8)'}} className="static-cart">
                    <span>Jami mijozlar: </span>
                    <span>80</span>
                </div>
                <div className="static-cart">
                    <span>To'laganlar: </span>
                    <span>59</span>
                </div>
                <div style={{background:'rgba(255, 31, 31, 0.3)'}} className="static-cart">
                    <span>Qarzdorlar: </span>
                    <span>21</span>
                </div>
            </div>
        </div>

        <div className="content options-panel">
            <div className="options" style={{backgroundColor: 'rgba(255, 45, 45, 0.6)'}}>
                <span className="option-count">5400000so'm</span>
            </div>
            <div className="options" style={{backgroundColor: 'rgba(52, 167, 17, 0.6)'}}>
                <span className="option-count">5400000so'm</span>
            </div>
        </div>
    </div>
  )
}

export default Dashboard