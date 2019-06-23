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
                        <p>HTML/CSS | Bootstrap | Ruby on Rails | JavaScript | React.js | NodeJS </p>
                        <div className="social-links">

                            {/* LinkdIn */}
                            <a href="https://www.linkedin.com/in/zahra-ashrafi/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/zarash" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="https://stackoverflow.com/users/6118904/zarash" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-stack-overflow"  aria-hidden="true" />
                    
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