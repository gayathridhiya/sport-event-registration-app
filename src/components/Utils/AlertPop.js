import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


class AlertPop extends React.Component {
    render() {

        return (
            <>
                <Alert variant="success">
                    <Alert.Heading>Time Conflict</Alert.Heading>
                    <p>
                        You have already selected an event which conflicts with the current event.
                        Please unselect the event from Selected Section and try adding again.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.props.setShowAlert()} variant="outline-success">
                            OK
                        </Button>
                    </div>
                </Alert>
            </>
        );
    }
}

export default AlertPop;