import React, { Component } from 'react';
import './ThankYou.css';

class ThankYou extends Component {
  render() {
    return (
      <div  className="thankyouStyle">
        <div className="center-div">
          <div className='contents'>
              <h4 className="text-center" style={{color:"green"}}>Thank You for submitting!</h4>
              <p className="text-center pt-10">Get Ready to Sweat, Laugh and Cheer at Your Sports Day Adventure</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
