import React, { Component } from 'react';

class Monday extends Component {
    constructor(props) {
        super(props);
    }

    mapMeetings = () => {
        let mondayMeetings = this.props.meetings.filter(meeting =>
            meeting.dayOfWeek === 'Monday'
        )
        debugger; 
        this.displayMeetings(mondayMeetings)
    }



    render() { 
        return ( 
            <div>{this.mapMeetings()}</div>
         );
    }
}
 
export default Monday;