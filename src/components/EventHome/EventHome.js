import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventRequest } from '../../actions/eventAction';
import SelectedEvents from '../SelectedEvents/SelectedEvents';
import FilterEvent from '../SelectedEvents/FilterEvent';
import EventCard from './EventCard';
import Pagination from '../Utils/Pagination';
import ProgressBar from 'react-bootstrap/ProgressBar';

class EventHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      eventsPerPage: 4
    }
  }

  componentDidMount() {
    this.props.fetchEventRequest();
  }


  changePage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.filteredEventsBasedOnCategory.length != this.props.filteredEventsBasedOnCategory.length) {
      this.setState({
        currentPage: 1,
      })
    }
  }

  render() {

    const { _events } = this.props._events;

    const { filteredCategories } = this.props.uniqueCategories;
    const indexOfLastEvent = this.state.currentPage * this.state.eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - this.state.eventsPerPage;

    const currentEvents = this.props.filteredEventsBasedOnCategory.slice(indexOfFirstEvent, indexOfLastEvent);
    const paginationTotalPages = this.props.filterCategory === "All Events" ? _events.length : this.props.filteredEventsBasedOnCategory.length;

    if (currentEvents && currentEvents.length > 0) {
      return (
        <>
          <div className="container-fluid wow fadeInUp main" data-wow-delay="0.1s">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="row g-5" id="events">
                    {currentEvents.map((item, index) => (
                      <EventCard key={item.id} item={item} isDisabled={item.selectCount} />
                    ))
                    }
                    <Pagination eventsPerPage={this.state.eventsPerPage}
                      totalEvents={paginationTotalPages}
                      paginate={(number) => this.changePage(number)}
                      currPage={this.state.currentPage}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <FilterEvent filteredCategories={this.props.uniqueCategories} />
                  <SelectedEvents />
                </div>
              </div>
            </div>
          </div>

        </>

      )
    }
    return (
      <ProgressBar variant="primary" now={60} />
    )
  }
}

const mapStateToProps = state => {
  return {
    totalSelected: state._todoEvents.totalSelected,
    _events: state._todoEvents,
    uniqueCategories: state._todoEvents.uniqueCategories,
    filteredEventsBasedOnCategory: state._todoEvents.filteredEventsBasedOnCategory,
    filterCategory: state._todoEvents.filterCategory,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventRequest: () => dispatch(fetchEventRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventHome);