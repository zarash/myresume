import React, { Component } from 'react';
class Experience extends Component {
    render(){
        return(
            <div style={{ border: 'double gray' , margin: '0 0 3px 0', padding: '1%'}}>
                    <h4 style={{marginTop: '0px' }}>{this.props.jobName}</h4>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <p>{this.props.jobDescription}</p>
            </div>
        )
    }
}
 
export default Experience;