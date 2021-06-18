import React from 'react'
import "./Skills.css"
function Skills({ skills }) {
    return (
        <div className="skills">

            <div className="skills__first">
                <h3>skills</h3>
                <hr className="hr" />
            </div>
            <div className="skills__second">
                <div className="hr-line">
                    <hr className="hr-line-first" />
                    <hr className="hr-line-second" />
                </div>

                <table>
                    <tbody>
                        {/* skill_name: "",
                        skill_category: "", */}
                        {skills?.map((value, index) => (
                            
                            <tr className="skills__row" key={index}>
                                <td className="skills__row__programming">
                                    {value.skill_category}
                                </td>

                                <td className="skills__row__details">

                                    <p>{value.skill_name} </p>
                                 
                                </td>

                            </tr>
                        ))}
                             

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Skills
