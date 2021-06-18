import React from 'react'
import './Objective.css';

function Objective({ objective }) {
    
    return (
        <div className="objective">

            <div className="objective__first">
                <h3>objective</h3>
             <hr className="hr"/>
            </div>
            <div className="objective__second">
                {/* <p>To succed in an environment of growth and excellence and earn a job which provides me job satisfaction and self-development and help me achieve personal as well as organisational goals.</p>
                 */}
                <p>{objective}</p>
              
            </div>
           
        </div>
    )
}

export default Objective
