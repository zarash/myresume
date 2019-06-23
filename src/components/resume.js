import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                          <img 
                            src="https://www.uap.asia/wp-content/uploads/2017/01/me2.png"
                            alt="avatar"
                            style={{height: '200px'}}
                          />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Zahra Ashrafi</h2>
                        <h4 style={{color:'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #c2d6d6', width: '50%'}}/>
                        <p> Software Development professional with six years experience programming in C#.Net & Ruby on Rails & JavaScript</p>
                        <hr style={{borderTop: '3px solid #c2d6d6', width: '50%'}}/>
                        <h5>Address</h5>
                        <p> East Azerbaijan, Tabriz</p>
                        <h5>Phone</h5>
                        <p>(+98) 903-453-3190</p>
                        <h5>Email</h5>
                        <p>Z.Ashrafi@yahoo.com</p>
                        <hr style={{borderTop: '3px solid #c2d6d6', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8} shadow={5} style={{ margin: 'auto'}}>

                        <h5>Education</h5>

                        <Education 
                            startYear = {2014}
                            endYear ={2017}
                            SchoolName = "Master of Computer engineering"
                            SchoolBranch = "Branch: Software"
                            SchoolDescription = " University: Tabriz Azad University"
                       />

                        <Education 
                            startYear = {2008}
                            endYear ={2012}
                            SchoolName = "Bachelor of Computer engineering"
                            SchoolBranch = "Branch: Software"
                            SchoolDescription = " University: Tabriz Azad University"
                       />
                  
                        <hr style={{borderTop: '3px solid #c2d6d6'}} />

                        <h5>Experience</h5>
                        <Experience
                          startYear = {2017}
                          endYear = {2019}
                          jobName = "Software Developer"
                          jobDescription = "Company: Parmis Tarahan Pasargad (PTP)"
                        />

                        <Experience
                          startYear = {2015}
                          endYear = {2017}
                          jobName = "Software Developer"
                          jobDescription = "Company: Iranian Hosh Afzone"
                        />

                        <hr style={{borderTop: '3px solid #c2d6d6'}} />

                        <h5>Skills</h5>
                        <Skills 
                          skill="React.js"
                          Progress={65}
                        /> 

                        <Skills 
                          skill="JavaScript"
                          Progress={80}
                        /> 

                        <Skills 
                          skill="Node.js"
                          Progress={50}
                        />

                        <Skills 
                          skill="Ruby on Rails"
                          Progress={80}
                        /> 

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;