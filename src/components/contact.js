import React, { Component } from 'react';
import { Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
              <Grid className="contact-grid">
                  <Cell col={6}>
                      <h3>Zahra Ashrafi</h3>
                      <img 
                        src="https://www.uap.asia/wp-content/uploads/2017/01/me2.png"
                        alt="avatar"
                        style={{height: '250px'}}
                      /> 
                      <p style={{ width: '75%' , margin:'auto', paddingTop: '1em'}}>Hi, I am Zahra</p>
                  </Cell>

                  <Cell col={6}>
                      <h3>Contact Me</h3>
                      <hr />
                      <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (+98) 903-453-3190
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    Z.Ashrafi@yahoo.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (+98) 903-453-3190
                                </ListItemContent>
                            </ListItem>
                        </List>
                      </div>
                      
                  </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;