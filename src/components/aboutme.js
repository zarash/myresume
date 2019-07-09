import React, { Component } from 'react';
import { Grid, Card } from 'react-mdl';


class About extends Component{
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
                    <Card className="resume-left-col" col={8} shadow={5} style={{minWidth: '50%', margin: '2% auto' , backgroundColor: '#f2f2f2'}}>

                        <h5 style={{color: 'blue'}}>About Me</h5>
                        <p>I have over 6 years of experience working as a software developer! Currently, 
                            I work as a freelancer, I'm really interested in learning and improving 
                            my skills in programming.
                            I also have a huge passion for cultures and languages and am always up for getting out of my comfort zone. </p>
                            
                            <p>Nothing ventured, nothing gained!</p>

                        
                    </Card>
                </Grid>

            </div>
        )
    }
}

export default About;

