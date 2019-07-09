import React, { Component } from 'react';
import {  Grid, Card } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Card className="resume-right-col" col={3}  style={{minWidth: '20%', margin: '0.5% auto'}}>
                          <img 
                            src="https://www.uap.asia/wp-content/uploads/2017/01/me2.png"
                            alt="avatar"
                            style={{height: '170px', width: '170px'}}
                          /> 
                        <h4 style={{color:' #1f60a9'}}> Hi, I'm Zahra Ashrafi!</h4>
                        <h6 style={{color:'grey',margin: '1px'}}>Software Developer</h6>
                        <p style={{}}>professional with six years experience programming in C#.Net & Ruby on Rails & JavaScript</p>
                        <h5 style={{margin: '1px'}}>Phone</h5>
                        <p>(+98) 903-453-3190</p>
                        <h5 style={{margin: '1px'}}>Email</h5>
                        <p>Z.Ashrafi@yahoo.com</p>
                    </Card>
                    <Card className="resume-left-col" col={8} shadow={5} style={{minWidth: '50%', margin: '2% auto',overflowY: 'scroll', backgroundColor: '#f2f2f2'}}
                     
                    >

                        <h5 style={{color: 'blue'}}>Education</h5>

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

                        <h5 style={{color: 'blue'}}>Experience</h5>
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
                    </Card>
                </Grid>

            </div>
            
        )
    }
}

export default Resume;