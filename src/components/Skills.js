import React, { Component } from 'react'
import '../css/skills.css'


class skills extends Component {
    render() {
        return (

            <section className="page-section_2" id="skills">
                <div className="container-skills">
                    <h1>Software Skills</h1>
                    <div className="skillbox">
                        <p>Html 5</p>
                        <p>95%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "95%" ,Animation:"2s"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>CSS</p>
                        <p>90%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "90%"}}></div>                        
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>Bootstrap</p>
                        <p>80%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "80%"}}></div>                        
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>C</p>
                        <p>75%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "75%"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>Java</p>
                        <p>85%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "85%"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>JavaScript</p>
                        <p>85%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "85%"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>React</p>
                        <p>65%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "65%"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>Json/XML</p>
                        <p>90%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "90%"}}></div>    
                        </div>
                    </div>

                    <div className="skillbox">
                        <p>PowerShell</p>
                        <p>60%</p>
                        <div className="skill">
                            <div className="skill_level" style={{width: "60%"}}></div>    
                        </div>
                    </div>
            </div>
        </section>
        )
    }
}

export default skills
