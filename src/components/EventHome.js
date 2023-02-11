import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventRequest } from '../actions/eventAction'

class EventHome extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchEventRequest();
  }

  render() {
    return (
      <div>EventHome</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numberCart: state._todoEvents.numberCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
      fetchEventRequest: () => dispatch(fetchEventRequest()) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventHome);