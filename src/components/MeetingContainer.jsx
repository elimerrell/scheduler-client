import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NewMeeting from './NewMeeting.jsx'

class MeetingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meetings: []

         }
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/meetings')
        .then(resp => resp.json())
        .then(meetings => {
            this.setState({ 
                meetings: meetings
            })
        })
    }

    addMeeting = (newMeeting) => {
        console.log('hitting add meeting function')
        let newMeetings = this.state.meetings.slice()
        newMeetings.push(newMeeting)
        this.setState({
            meetings: newMeeting
        })  
        this.persistMeeting(newMeeting)
    }

    persistMeeting = (newMeeting) => {
        //post new meeting
        fetch('http://localhost:3000/meetings', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMeeting), // body data type must match "Content-Type" header
        }).then(resp => resp.json())
    }

    render() { 
        return (
        <Container>
            <Row>
                <NewMeeting addMeeting={this.addMeeting} />
            </Row>
            <Row>
                <Col xs={3}><Monday meetings={this.state.meetings} addMeeting={this.addMeeting}/></Col>
                {/* <Col xs={3}><Tuesday/></Col>
                <Col xs={3}><Wednesday/></Col>
                <Col xs={3}><Thursday/></Col>
                <Col xs={3}><Friday/></Col> */}
            </Row>
        </Container>
         );
    }
}
 
export default MeetingContainer;