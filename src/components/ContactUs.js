import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">

        <div>
          <h2 className='workHear'>Contact</h2>
          <div className="contactInfo">
            <p className="address">
              <span>{resumeData.name}</span>
              <br></br>
              <span>
                {resumeData.address}
              </span>
              <br></br>
              <span>
                {resumeData.Cellphone}
              </span>
              <br></br>
              <span>
                {resumeData.Email}
              </span>
              <br></br>
              <a href='https://useryansong.github.io/Resume-Yansong/Resume_Yansong%20Shi.pdf' target="blank">Online Resum&eacute;</a>
            </p>
          </div>

        </div>
      </section>
    );
  }
}