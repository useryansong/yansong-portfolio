import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        {/* <div className="row section-head"> */}
        {/* <div className="ten columns">
            <div className="row">

              <div className="columns contact-details">

                <h2 className='workHear'>Contact Details</h2>
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
                  <a href='https://jgiamanco.github.io/resume/Docs/JGResume8_26.pdf'>Online Resum&eacute;</a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
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
              <a href='https://jgiamanco.github.io/resume/Docs/JGResume8_26.pdf'>Online Resum&eacute;</a>
            </p>
          </div>

        </div>
      </section>
    );
  }
}