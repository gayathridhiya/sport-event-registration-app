import React, { Component } from 'react'

class SearchEvent extends Component {
    render() {
        return (
            <>
                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="input-group">
                        <input type="text" className="form-control p-3" placeholder="Keyword" />
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchEvent