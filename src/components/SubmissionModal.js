import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";


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
                    <h5>Please confirm your submission for the below events. <br/>Please click on submit to register.</h5>
                    {
                        Object.values(this.props._selectedevents).map( (itm,idx) => 
                        (
                            <li key={idx}>{itm.item.event_name}</li>
                        ))
                    }
                    {this.state.showSubmisssionMessage && 
                    <div className='align-center'>
                        <h6 className='text-success'>Submitted Successfully!</h6>
                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled = {this.state.showSubmisssionMessage} onClick={() => this.setState({ showSubmisssionMessage : true, redirectToThankYouPage: true})}>Submit</Button>
                    
                    <Button onClick={() => this.props.onHide(false)}>Go Home</Button>
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
