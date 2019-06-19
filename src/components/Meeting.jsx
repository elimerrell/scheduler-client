import React, { Component } from 'react';

class Meeting extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <div
                style={{
                    border: "1px solid black",
                    margin: '10px',
                    padding: '10px'
                }}
                >
                    <p>{this.props.meeting.title}</p>
                    <p>{this.props.meeting.meetingTime}</p>
                    {/* <p>{this.props.meeting.comments}</p> */}
                    <p>{this.props.meeting.dayOfWeek}</p>
                </div>
            </div>
         );
    }
}
 
export default Meeting;