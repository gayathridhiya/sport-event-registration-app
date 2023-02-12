import React, { Component } from 'react'

class Pagination extends Component {
    render() {
        const {eventsPerPage , totalEvents, paginate} = this.props;
        const pageNumbers = [];
        for(let i=1; i<=Math.ceil(totalEvents / eventsPerPage); i++)
        {
            pageNumbers.push(i);
        }
        return (
            <>
                <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                    <nav aria-label="Page navigation">
                        <ul className="pagination pagination-lg m-0">
                            <li className="page-item disabled">
                                <a className="page-link rounded-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                                </a>
                            </li>
                            {
                                pageNumbers.map( (number,idx) => 
                                    (
                                        <li key={idx} className="page-item">
                                        <a onClick ={() => paginate(number)} className="page-link" href="#">{number}</a>
                                        </li>

                                    ))
                            }
                            {/* <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                            {/* <li className="page-item">
                                <a className="page-link rounded-0" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default Pagination;