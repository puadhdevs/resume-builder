import React from 'react'
import "./Educational.css"

function Educational({ educational }) {
    return (
        <div className="educational">

            <div className="educational__first">
                <h3>educational details</h3>
                <hr className="hr" />
            </div>
            <div className="educational__second">
                
                <div className="hr-line">
                    <hr className="hr-line-first" />
                    <hr className="hr-line-second"/>
                </div>
               

                <table>
                    <tbody>
                        {educational?.map((value,index) => (
                           
                                <tr className="educational__row" key={index}>

                                    <td className="educational__row__year">
                                        {value.year_of_completion}
                                    </td>

                                    <td className="educational__row__details">
                                    <p> <span className="educational__course">
                                        {value.standard === "Graduation"  ? <span>
                                            {value.graduation_course} {" "} ({value.graduation_stream}) {" "}
                                            </span> :
                                            value.standard
                                            }
                                    </span> {" "}|  {value.marks_obtained} {" "} {value.marks_type === "Percentage" ? "%" : "CGPA"} </p>
                                        {/* <p className="educational__course">{value.graduation_stream}</p> */}
                                    <p className="educational__schoolCollege">
                                        {value.schoolCollege}
                                        {", "}
                                        {value.educational_city &&
                                            <span>
                                                {value.educational_city} {", "}
                                        </span> 
                                        
                                        }

                                   {value.school_college_state}
                                       
                                       
                                      
                                       </p>
                                    {value.boardUniversity && <p>
                                       ( <strong> {value.boardUniversity} </strong>)
                              </p> }     

                                    </td>

                                </tr>
                         
                            
                        ))}
                     

                
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Educational
