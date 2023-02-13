import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import successBookIcon from "../../assets/img/successBook.png";


class SubmissionModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSubmisssionMessage : false,
        redirectToThankYouPage: false
      }
    }

    render() {
        const { dispatch, _selectedEvents } = this.props;
        if (this.state.redirectToThankYouPage) {
            return <Navigate to='/thank-you' replace={true}/>
        }

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Registration Confirmation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Please confirm your submission for the below events. Please click on <b style={{color:"green"}}>Submit</b> to register.</h6>
                    {
                        Object.values(this.props._selectedevents).map( (item,idx) => 
                        (
                            // <li key={idx}>{itm.item.event_name}</li>
                            <div>
                            <Card key={item.idx} className="mb-2 d-flex">
                                <Card.Body className="flex-1">
                                    <Card.Title className="mt-0 bg-info text-white py-1 px-4">{item.item.event_category}</Card.Title>
                                    <Card.Title>{item.item.event_name}</Card.Title>
                                    <Card.Text>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>Event Starts at <b>{new Date(item.item.start_time).toDateString()} - {new Date(item.item.start_time).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</b></small>
                                        <br/>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>Event Ends by <b>{new Date(item.item.end_time).toDateString()} - {new Date(item.item.end_time).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</b></small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        ))
                    }
                    {this.state.showSubmisssionMessage && 
                    <div className='align-center'>
                        <h6 className='text-success'>Submitted Successfully!</h6>
                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled = {this.state.showSubmisssionMessage} onClick={() => this.setState({ showSubmisssionMessage : true, redirectToThankYouPage: true})}>Submit</Button>
                    
                    <Button onClick={() => this.props.onHide(false)}>Edit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


const mapStateToProps = state => {
    return {
        _selectedevents: state._todoEvents._selectedEvents
    }
}
export default connect(mapStateToProps, null)(SubmissionModal);
