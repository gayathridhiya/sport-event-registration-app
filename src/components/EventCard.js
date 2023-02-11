import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styleSheets/EventCardStyle.css";
import img1 from '../assets/img/ballBackground.gif';
import img2 from '../assets/img/ballBackground2.gif';
import img3 from '../assets/img/baseBallBg.gif';


class EventCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         imgArray : [img1, img2, img3]
      }
    }
    render() {
        const { item } = this.props;
        const randomIndex = Math.floor( Math.random() * 3);
        return (
            <>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                <Card>
                    <Card.Img variant="top" src={this.state.imgArray[randomIndex]} />
                    <a className="linkStyle position-absolute top-0 start-0 bg-info text-white mt-0 py-2 px-4" href="">{item.event_category}</a>
                    <Card.Body className="cardBodyStyle">
                        <Card.Title>{item.event_name}</Card.Title>
                        <Card.Text>
                        
                            <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.start_time}</small>
                        
                        </Card.Text>
                        <div className="inOutStyle">
                        <Button variant="success" className="inStyle">Count me In</Button>
                        <Button variant="danger" className="outStyle">Count me Out</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </>
        )
    }
}

export default EventCard;