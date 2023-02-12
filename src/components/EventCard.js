import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styleSheets/EventCardStyle.css";
import img1 from '../assets/img/ballBackground.gif';
import img2 from '../assets/img/ballBackground2.gif';
import img3 from '../assets/img/baseBallBg.gif';
import { addEventToSelectionArea } from '../actions/eventAction';
import { connect } from 'react-redux';


class EventCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgArray: [img1, img2, img3]
        }
    }

    handleSelection = (evt_item) => {
        const {item} = evt_item;
        const currentEventStartTime = new Date(item.start_time).getTime();
        const currentEventEndTime = new Date(item.end_time).getTime();
        let isOverLapping = false;
        for(let idx=0; idx< this.props._selectedEvents.length; idx++)
            {
                const startTime = new Date(this.props._selectedEvents[idx].item.start_time).getTime();
                const endTime = new Date(this.props._selectedEvents[idx].item.end_time).getTime();
                console.log(startTime, endTime)
                if((startTime <= currentEventStartTime && currentEventStartTime <= endTime) ||
                    (startTime <= currentEventEndTime && currentEventEndTime <= endTime) ){
                    isOverLapping = true;
                    break;
                }

            }
        if(isOverLapping){
            alert("Time Conflict, Please choose other event!")
        }else{
            this.props.addEventToSelectionArea(evt_item);
        }
        
            
    }
  

    render() {
        const { item , isDisabled } = this.props;
        console.log("isDisabled", isDisabled, item.id)
        const randomIndex = Math.floor(Math.random() * 3);
        return (
            <>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                    <Card>
                        <Card.Img variant="top" src={this.state.imgArray[randomIndex]} />
                        <a className="linkStyle position-absolute top-0 start-0 bg-info text-white mt-0 py-2 px-4" href="">{item.event_category}</a>
                        <Card.Body className="cardBodyStyle">
                            <Card.Title>{item.event_name}</Card.Title>
                            <Card.Text>

                                <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.start_time}</small><br/>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.end_time}</small>
                            </Card.Text>
                            <div className="inOutStyle">
                                <Button variant="success" className="inStyle" disabled={isDisabled} onClick={() => this.handleSelection({ item })}>Count me In</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
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