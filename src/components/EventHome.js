import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEventRequest } from '../actions/eventAction';
import SelectedEvents from './SelectedEvents';
import SearchEvent from './SearchEvent';
import EventCard from './EventCard';
import Pagination from './Pagination';

function Dummy(){
  useEffect(()=>{

    console.log("Hi")
})
}

class EventHome extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchEventRequest();
  }

  render() {
    
    const { _events } = this.props._events;
    // console.log("events", _events)
    // console.log(_events, typeof _events)
    if (_events && _events.length > 0) {
      return (
        <>
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="row g-5">
                    {_events.map((item, index) => (
                      <EventCard key={item.id} item={item} isDisabled={item.selectCount || this.props.totalSelected>2} />
                    ))
                    }
                    <Pagination />
                  </div>
                </div>
                <div className="col-lg-4">
                  <SearchEvent />
                  <SelectedEvents />
                </div>
              </div>
            </div>
          </div>

        </>

      )
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    totalSelected: state._todoEvents.totalSelected,
    _events: state._todoEvents,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventRequest: () => dispatch(fetchEventRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventHome);