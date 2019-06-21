import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.uap.asia/wp-content/uploads/2017/01/me2.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text"> 
                            <h1>Full Stack Web Developer</h1>
                           
                            <hr />
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB</p>
                        <div className="social-links">

                            {/* LinkdIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;