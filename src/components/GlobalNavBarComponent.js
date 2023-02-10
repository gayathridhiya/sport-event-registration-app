import React from "react";
import "../styleSheets/GlobalNavBarStyle.css";
import brandLogo from "../assets/img/BrandLogo.png";

class GlobalNavBarComponent extends React.Component {

    render() {
        return (
            <>
                <div className="GlobalNav">
                    {/* <div className="intuitStyle"> */}
                        <div className="brandLogoStyle" style={{ "height": 25 }}>
                            <img src={brandLogo} alt="Intuit" />
                        </div>
                    {/* </div> */}
                    {/* <div className="col-lg-4 text-center text-lg-end">
                            <div className="navBarPreHeadStyle" style={{"height": 45}}>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                            </div>
                        </div> */}
                </div>
            </>
        )
    }

}

export default GlobalNavBarComponent;