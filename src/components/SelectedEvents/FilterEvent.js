import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filteredEventsBasedOnCategories } from '../../actions/eventAction';
import ball from '../../assets/img/ball.jpg';

class FilterEvent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { filteredCategories } = this.props;
        console.log("filter",filteredCategories, this.props.filterCategory)
        return (
            <>
                
                    <div className="mb-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-2 d-flex">
                    <h4 className="mb-0 selectedTitle mt-2" >Choose your Play Ground!
                        </h4>
                        <img src={ball} alt="" style={{height: 70, width:70}}/>
                        
                    </div>
    
                    <div className="d-flex flex-wrap m-n1">
                        {
                            filteredCategories && filteredCategories.map(
                                (itm, idx) => (
                                    <a key={idx} onClick = { () => this.props.filteredEventsBasedOnCategories(itm) } 
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
        filteredEventsBasedOnCategories: (itm) => dispatch(filteredEventsBasedOnCategories(itm))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FilterEvent);