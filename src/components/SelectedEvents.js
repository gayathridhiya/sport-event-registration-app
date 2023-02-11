import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import "../styleSheets/EventCardStyle.css";
import successBookIcon from "../assets/img/successBook.png";

class SelectedEvents extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        console.log(this.props._selectedEvents)
        console.log(this.props._selectedEvents.map(x => console.log(x.item)))
        return (
            <>
                {this.props._selectedEvents && this.props._selectedEvents.length !== 0 ?
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">

                        <div className="section-title section-title-sm pb-3 mb-4">
                            <h3 className="mb-0"> Selected Events</h3>
                        </div>

                        {this.props._selectedEvents && this.props._selectedEvents.map((item, idx) => (
                            <Card key={idx} className="mb-2 successEventcardStyle">
                                <div className="successEventCardImgStyle">
                                    <Card.Img variant="top" src={successBookIcon} />
                                    
                                </div>
                                <Card.Body className="cardBodyStyle">
                                    {/* <a className="successEventCardlinkStyle bg-info text-white py-1 px-4" href="">{item.item.event_category}</a> */}
                                    
                                    <Card.Title className="successEventCardTitleStyle mt-0 bg-info text-white py-1 px-4">{item.item.event_category}</Card.Title>
                                    <Card.Title>{item.item.event_name}</Card.Title>
                                    <Card.Text>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.item.start_time}</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                           
                        ))
                        }

                    </div>
                    :
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-4 mb-4">
                            <h3 className="mb-0 pl-7">No Selected Events</h3>
                        </div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        _selectedEvents: state._todoEvents._selectedEvents
    }
}

export default connect(mapStateToProps, null)(SelectedEvents);