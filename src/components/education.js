import React, { Component } from 'react';
class Education extends Component {
    render(){
        return(
            <div style={{ border: 'double gray' , margin: '0 0 3px 0', padding: '1%'}}>
                
                    <h4 style={{marginTop: '0px' }}>{this.props.SchoolName}</h4>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <p>{this.props.SchoolBranch}</p>
                    <p>{this.props.SchoolDescription}</p>
                
            </div>
        )
    }
}
 
export default Education;