import React, { Component } from 'react';
import resumeData from '../resumeData';
import Gallery from './Gallery';
import { Timeline, Calendar } from "antd"

export default class Porfolio extends Component {

  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        {/* <div className="row work">
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
        </div> */}
        <div className='workHear'>Experience</div>
        <div  className='portTimeline'>
          <Timeline>
          <Timeline.Item color="green">
              <h4>Frontend Web Design</h4>
              <p>Designed web using React.js and Node.js </p>
              <p><a href='https://github.com/useryansong/React-admin-client'>https://github.com/useryansong/React-admin-client</a></p>
            </Timeline.Item>
            <Timeline.Item color="green">
              <h4>Eyesonic Enterprise Inc.</h4>
              <p>IT Support Octorber 2019 - Present</p>
            </Timeline.Item>
            <Timeline.Item color="red">
              <h4>Smart Vision Direct</h4>
              <p>IT Support August 2017 - September 2018</p>
            </Timeline.Item>
            <Timeline.Item>
              <h4>Western University</h4>
              <p>Master of Engineering in Electrical and Computer Engineering</p>
            </Timeline.Item>
            <Timeline.Item>
              <h4>Hangzhou Dianzi University</h4>
              <p>Bachelor of Engineering in Electrical and Computer Engineering</p>
            </Timeline.Item>
          </Timeline>
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <div className='workHear'>My Works</div>
            <div className="s-bgrid-thirds cf">
              <Gallery resumeData={resumeData} />
            </div>
          </div>
        </div>
      </section>

    );
  }
}