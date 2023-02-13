import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./EventCardStyle.css";
import img1 from '../../assets/img/ballBackground.gif';
import img2 from '../../assets/img/ballBackground2.gif';
import img3 from '../../assets/img/baseBallBg.gif';
import { addEventToSelectionArea } from '../../actions/eventAction';
import { connect } from 'react-redux';
import AlertPop from '../Utils/AlertPop';


class EventCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgArray: [img1, img2, img3],
            showAlert: {
                alert: false,
                alertHeading : "",
                alertMsg: "",

            }
        }
    }

    handleSelection = (evt_item) => {
        if (this.props.totalSelected === 3) {
            this.setState({
                showAlert: {
                    alert: true,
                    alertHeading : "MAXIMUM EVENTS EXCEEDED",
                    alertMsg: "You have already selected maximum number of events. Please unselect an event from Selected Section and try adding again."
                }
            })
        }
        else {
            const { item } = evt_item;
            const currentEventStartTime = new Date(item.start_time).getTime();
            const currentEventEndTime = new Date(item.end_time).getTime();
            let isOverLapping = false;
            for (let idx = 0; idx < this.props._selectedEvents.length; idx++) {
                const startTime = new Date(this.props._selectedEvents[idx].start_time).getTime();
                const endTime = new Date(this.props._selectedEvents[idx].end_time).getTime();
                console.log(startTime, endTime)
                if ((startTime <= currentEventStartTime && currentEventStartTime < endTime) ||
                    (startTime < currentEventEndTime && currentEventEndTime <= endTime)) {
                    isOverLapping = true;
                    break;
                }

            }
            if (isOverLapping) {
                this.setState({
                    showAlert: {
                        alert: true,
                        alertHeading : "TIME CONFLICT",
                        alertMsg: "You have already selected an event which conflicts with the current event. Please unselect the event from Selected Section and try adding again."
                    }
                })
            }
            else {
                this.props.addEventToSelectionArea(evt_item);
            }
        }


    }


    render() {
        const { item, isDisabled } = this.props;
        console.log("isDisabled", isDisabled, item.id)
        const randomIndex = Math.floor(Math.random() * 3);
        return (
            <>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                    <Card className="card">
                        <Card.Img className="cardImgStyle" variant="top" src={this.state.imgArray[randomIndex]} />
                        <a className="linkStyle position-absolute top-0 start-0 bg-info text-white mt-0 py-2 px-4" href="">{item.event_category}</a>
                        <Card.Body className="cardBodyStyle">
                            <Card.Title> <b>{item.event_name}</b></Card.Title>
                            <Card.Text>

                                <small><i className="far fa-calendar-alt text-primary me-2"></i>Event Starts at <b>{new Date(item.start_time).toDateString()} - {new Date(item.start_time).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</b></small><br />
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>Event Ends by <b>{new Date(item.end_time).toDateString()} - {new Date(item.end_time).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</b></small>
                            </Card.Text>
                            <div className="inOutStyle">
                                <Button variant={isDisabled ? "secondary" : "success"} className="inStyle" disabled={isDisabled} onClick={() => this.handleSelection({ item })}>Count me In</Button>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
                {
                    this.state.showAlert.alert && <AlertPop show={this.state.showAlert.alert}
                        alertMsg={this.state.showAlert.alertMsg}
                        alertHeading={this.state.showAlert.alertHeading}
                        setShowAlert={() => { this.setState({ showAlert: { alert: false,  alertHeading : "", alertMsg: "" } }) }} />
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalSelected: state._todoEvents.totalSelected,
        _selectedEvents: state._todoEvents._selectedEvents
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addEventToSelectionArea: (item) => dispatch(addEventToSelectionArea(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);