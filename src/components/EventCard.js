import React, { Component } from 'react';


class EventCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.start_time}</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>{item.end_time}</small>
                            </div>
                            <h4 className="mb-3">{item.event_name}</h4>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EventCard;