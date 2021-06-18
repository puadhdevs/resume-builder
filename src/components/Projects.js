
import React from 'react'
import "./Projects.css"
import moment from 'moment'
function Projects({ project}) {
    
   
    return (
        <div className="projects">

            <div className="projects__first">
                <h3>projects</h3>
                <hr className="hr" />
            </div>
            <div className="projects__second">
                <div className="hr-line">
                    <hr className="hr-line-first" />
                    <hr className="hr-line-second" />
                </div>


                <table> 
                    <tbody>
                      
                        
                        {project?.map((value, index) => (
                            <tr className="projects__row" key={index}>
                                <td className="projects__row__year">
                                    
                                    <span>  {moment(value.project_start_date).format("MMM Do YY")}   -   {moment(value.project_finish_date).format("MMM Do YY")} </span> </td>

                                <td className="projects__row__details">
                                    <p> <span className="projects__course"> {value.project_name} </span></p>
                                    <p className="projects__courseLink">
                                        {/* <Link>{value.project_url}</Link> */}
                                        <a href={value.project_url} target="_blank">{value.project_url}</a>
                                    </p>

                                    <p>{value.project_description}</p>

                                </td>

                            </tr>

                        ))}
                     
{/* 
                        <tr className="projects__row">
                            <td className="projects__row__year">May21 - May21</td>

                            <td className="projects__row__details">
                                <p> <span className="projects__course"> React-Blog </span></p>
                                <p className="projects__courseLink">
                                    <a href="#">https://www.udemy.com/course/django-with-react-an-ecommerce-website/</a>
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptate esse suscipit distinctio saepe dolore ab ipsam ad natus repellendus laudantium, debitis temporibus officiis tenetur quibusdam facilis itaque ratione obcaecati.</p>

                            </td>

                        </tr>    */}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Projects
