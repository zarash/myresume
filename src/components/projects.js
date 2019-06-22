import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </CardText>
                     <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* this is 2 project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'grean', height: '176px', background: 'url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png) center / cover'}}> React Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </CardText>
                     <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* this is project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'grean', height: '176px', background: 'url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png) center / cover'}}> React Project #3</CardTitle>
                    <CardText>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </CardText>
                     <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                </div>
                
            )
        } else if (this.state.activeTab ===1 ){
            return (  
                <div><h1>This is</h1></div>
            )
        }else if (this.state.activeTab ===2 ){
            return (
                <div><h1>This is</h1></div>
            )
        }else if (this.state.activeTab ===3 ){
            return (
                <div><h1>This is</h1></div>
            )
        }
    }
    
    render(){
        return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
                   <Tab>React</Tab>
                   <Tab>Ruby on Rails</Tab>
                   <Tab>PHP</Tab>
               </Tabs>

               
                   <Grid>
                       <Cell col={12}>
                           <div className="content">{this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
                   {this.toggleCategories()}
               
           </div> 
        )
    }
}

export default Projects;