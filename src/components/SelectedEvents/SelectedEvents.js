import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./SelectedEvents.css";
import successBookIcon from "../../assets/img/successBook.png";
import Button from 'react-bootstrap/Button';
import { deleteEvenFromSelectionArea } from '../../actions/eventAction';
import SubmissionModal from '../SubmissionModal/SubmissionModal';

class SelectedEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    setModalShow = (val) => {
        this.setState({
            showModal: val
        })
    }
    render() {
        console.log("s",this.props._selectedEvents)
        const variant = "Warning";
        return (
            <>
                {this.props._selectedEvents && this.props._selectedEvents.length !== 0 ?

                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">

                        <div className="section-title section-title-sm pb-3 mb-3">
                            <h4 className=" selectedTitle mb-0"> Selected Events</h4>
                        </div>

                        {this.props._selectedEvents && this.props._selectedEvents.map((item, idx) => (
                            <div>
                                <Card key={item.id} className="mb-2 successEventcardStyle">
                                    <div className="successEventCardImgStyle">
                                        <Card.Img variant="top" src={successBookIcon} />

                                    </div>
                                    <Card.Body className="cardBodyStyle">
                                        {/* <a className="successEventCardlinkStyle bg-info text-white py-1 px-4" href="">{item.event_category}</a> */}

                                        <Card.Title className="successEventCardTitleStyle mt-0 bg-info text-white py-1 px-4">{item.event_category}</Card.Title>
                                        <Card.Title>{item.event_name}</Card.Title>
                                        <Card.Text>
                                            <small>
                                                <b>{item.start_time} to </b><b>
                                                 {item.end_time.split(" ")[1]}</b></small>

                                        </Card.Text>
                                        <Button variant="outline-danger" className="outStyle" onClick={() => this.props.deleteEvenFromSelectionArea({ item })}>Count me Out</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        ))
                        }

                        <Button variant='primary' onClick={() => this.setModalShow(true)} className="mt-2 registerButton">Register</Button>
                        <SubmissionModal show={this.state.showModal}
                            onHide={() => this.setModalShow(false)} />
                    </div>

                    :

                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        className="mb-2 quoteStyle"
                    >

                        <Card.Body>
                            <Card.Title>
                                Unleash the Athlete in You!

                            </Card.Title>
                            <Card.Text>
                                "Book your Sports Day Event now and experience the thrill of competition, camaraderie, and triumph!"
                            </Card.Text>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvenFromSelectionArea: (item) => dispatch(deleteEvenFromSelectionArea(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedEvents);