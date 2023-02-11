import React from "react";
import "../styleSheets/GlobalNavBarStyle.css";
import brandLogo from "../assets/img/BrandLogo.png";

class GlobalNavBarComponent extends React.Component {

    render() {
        return (
            <>
                <div className="GlobalNav">
                    <div className="brandLogoStyle">
                        <img src={brandLogo} alt="Intuit" />
                    </div>
                </div>
                <hr class="hr"/>
            </>
        )
    }

}

export default GlobalNavBarComponent;