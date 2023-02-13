import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./SelectedEvents.css";
import successBookIcon from "../../assets/img/successBook.png";
import Button from 'react-bootstrap/Button';
import { deleteEvenFromSelectionArea} from '../../actions/eventAction';
import SubmissionModal from '../SubmissionModal/SubmissionModal';

class SelectedEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false
        }
    }
    setModalShow = (val) => {
        this.setState({
            showModal: val
        })
    }
    render() {
        // console.log("s",this.props._selectedEvents)
        return (
            <>
                {this.props._selectedEvents && this.props._selectedEvents.length !== 0 ?
                    
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        
                        <div className="section-title section-title-sm pb-3 mb-4">
                            <h3 className="mb-0"> Selected Events</h3>
                        </div>

                        {this.props._selectedEvents && this.props._selectedEvents.map((item, idx) => (
                            <div>
                            <Card key={item.idx} className="mb-2 successEventcardStyle">
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
                                    <Button variant="outline-danger" className="outStyle" onClick={ () =>  this.props.deleteEvenFromSelectionArea({item})}>Count me Out</Button>
                                </Card.Body>
                            </Card>
                            
                            </div>
                        ))
                        }
                        
                        <Button variant='primary' onClick={() => this.setModalShow(true)} className="mt-2 registerButton">Register</Button>
                        <SubmissionModal show={this.state.showModal}
                                          onHide={() => this.setModalShow(false)}/>
                    </div>
                
                    :
                    
                    null
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