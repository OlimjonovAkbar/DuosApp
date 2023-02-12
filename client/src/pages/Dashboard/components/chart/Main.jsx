import React from 'react'
import { useState } from 'react';
import Chart from './Chart'
import { UserData } from './Data';

function Main() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(255, 31, 31, 0.3)",
              "rgba(100, 247, 100, 0.3)"
            ],
            
          },
        ],
      });
    
      // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
    
      return (
        <div className="Main">
            <div  style={{ width: '50%', height:'500px', position: 'absolute', top: '80px', left:'50px'}}>
                <Chart chartData={userData} />
            </div>
        </div>)
}

export default Main