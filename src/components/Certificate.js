import { Link } from '@material-ui/core'
import React from 'react'
import "./Certificate.css"
function Certificate({ certificate}) {
 
    return (
       
            <div className="certificate">

                <div className="certificate__first">
                    <h3>Certificate</h3>
                    <hr  className="hr"/>
                </div>
            <div className="certificate__second">
                <div className="hr-line">
                    <hr className="hr-line-first" />
                    <hr className="hr-line-second" />
                </div>

                {certificate?.map((value, index) => (
                    
                    <div key={index} className="certificate__details"> 
                        <p>{value.certificate_name}</p>
                        
                        <a href={value.certificate_url} target="_blank">{value.certificate_url}</a>
                        {value.certificate_description && <p>{value.certificate_description}</p>}
                    </div>
                ))}

               
                </div>
            </div>
       
    )
}

export default Certificate
