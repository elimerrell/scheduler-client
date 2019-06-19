import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class NewMeeting extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        let newMeeting = { 
            title: ev.target.meeting.value, 
            dayOfWeek: ev.target.day.value
        }
        this.props.addMeeting(newMeeting)
    }

    render() { 
        return ( 
            <Form onSubmit={(ev) => this.handleSubmit(ev)}>
                <Form.Group controlId="meeting">
                    <Form.Label>Meeting Title</Form.Label>
                    <Form.Control type="text" placeholder="Meeting Title" />
                </Form.Group>
                <Form.Group controlId="day">
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select">
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         );
    }
}
 
export default NewMeeting;