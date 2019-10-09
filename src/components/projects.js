import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0 ){
            return(
                <div className="projects-grid">
                    {/* this is project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'grean', height: '176px', background: 'url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png) center / cover'}}> React Project #1</CardTitle>
                    <CardText>
                    This is React project.
                    </CardText>
                     <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                </div>            
            )
        } else if (this.state.activeTab ===1 ){
            return (  
                <Card shadow={5} style={{minWidth:'450' , margin: 'auto'}}>
                    <CardTitle style={{color:'grean', height:'176px', background:'url(http://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.ruby.png) center/cover'}}>Ruby on Rails Project #1</CardTitle>
                    <CardText>This is Ruby on Rails Project.</CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }
    
    render(){
        return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                   <Tab>React</Tab>
                   <Tab>Ruby on Rails</Tab>
               </Tabs>

            <section className="project-grid">
                {this.toggleCategories()}
            </section>
           </div> 
        )
    }
}

export default Projects;