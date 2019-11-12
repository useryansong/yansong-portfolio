import React, { Component } from 'react';
// import resumeData from '../resumeData';
// import Gallery from './Gallery';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        {/* <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div className="s-bgrid-thirds cf">
              <Gallery resumeData={resumeData} />
            </div>
          </div>
        </div> */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div key={item.CompanyName} className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <em className="date">{item.MonthOfStaring} - {item.MonthOfLeaving} {item.YearOfLeaving}</em>
                      </p>

                      {item.Achievements.map((item) => {
                        return (
                          <p className="AchieveP" key={item.key}>
                            <span>&bull;</span>  {item.Achieve}
                          </p>
                        )
                      })}
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div key={item.UniversityName} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        <span>&bull;</span>  {item.specialization}
                        <em className="date">{item.MonthOfStaring} - {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </section>

    );
  }
}