import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filteredEventsBasedOnCategory } from '../actions/eventAction';

class FilterEvent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { filteredCategories } = this.props;
        console.log("filter",filteredCategories)
        return (
            <>
                
                    <div className="mb-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-2">
                        <h3 className="mb-0 text-primary" >Choose your ground!</h3>
                    </div>
    
                    <div className="d-flex flex-wrap m-n1">
                        {
                            filteredCategories && filteredCategories.map(
                                (itm, idx) => (
                                    <a key={idx} onClick = { () => this.props.filteredEventsBasedOnCategory(itm) } 
                                    className={this.props.filterCategory === itm ? "btn btn-light m-1 active" : "btn btn-light m-1"} >{itm}</a>
                                )
                            )
                        }

                    </div>
                </div>
                
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      filterCategory : state._todoEvents.filterCategory,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        filteredEventsBasedOnCategory: (itm) => dispatch(filteredEventsBasedOnCategory(itm))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FilterEvent);