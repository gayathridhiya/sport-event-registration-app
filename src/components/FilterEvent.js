import React, { Component } from 'react'

class FilterEvent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { filteredCategories } = this.props;
        console.log("filter",filteredCategories)
        return (
            <>
                
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 className="mb-0">Filter your ground!</h3>
                    </div>
    
                    <div className="d-flex flex-wrap m-n1">
                        {
                            filteredCategories && filteredCategories.map(
                                (itm, idx) => (
                                    <a key={idx} href="" className="btn btn-light m-1">{itm}</a>
                                )
                            )
                        }

                    </div>
                </div>
                
            </>
        )
    }
}

export default FilterEvent