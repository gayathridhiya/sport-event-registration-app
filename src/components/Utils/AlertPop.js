import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './AlertPop.css';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

class AlertPop extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div
                className="modal show">

                <Modal
                    size="lg"
                    show={this.props.show}
                    onHide={() => this.props.setShowAlert()}
                    aria-labelledby="example-modal-sizes-title-sm"

                >
                    {/* <Modal.Dialog> */}
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.alertHeading}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            {this.props.alertMsg}
                        </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={() => this.props.setShowAlert()}
                            className="btn btn-outline-success"
                        >
                            OK
                        </Button>
                    </Modal.Footer>
                    {/* </Modal.Dialog> */}
                </Modal>
            </div>
        );
    }
}

export default AlertPop;
