import React, { Component } from 'react';
import resumeData from '../resumeData';
import Gallery from './Gallery';
import { Timeline, Row, Col, Progress } from "antd"

export default class Porfolio extends Component {

  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className='workHear'>Experience</div>
        <div className='portTimeline'>
          <Row>
            <Col span={8} className="Row1">

              <div>

                <Progress percent={90}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                />
                <p>HTML/CSS/JAVASCRIPT/REACT.JS</p>
                <Progress percent={80}
                  strokeColor={{
                    '0%': '#87CB30',
                    '100%': '#EF9112',
                  }}
                  status="active" />
                <p>NODE.JS/MONGODB</p>
                <Progress percent={75}
                  strokeColor={{
                    '0%': '#CD1DD0',
                    '100%': '#730DE6',
                  }}
                  status="active" />
                <p>LINUX/MYSQL</p>
                <Progress percent={95}
                  strokeColor={{
                    '0%': '#1B9B78',
                    '100%': '#08EE3C',
                  }}
                  status="active" />
                <p>TEAM WORK</p>
                <Progress percent={85}
                  strokeColor={{
                    '0%': '#87CB30',
                    '100%': '#EE2E08',
                  }}
                  status="active" />
                <p>COMMUNICATION</p>
              </div>
            </Col>

            <Col span={5}></Col>

            <Col span={11}>
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
            </Col>
          </Row>
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <div className='workHear'>Experience·Project</div>
            <div className="s-bgrid-thirds cf">
              <Gallery resumeData={resumeData} />
            </div>
          </div>
        </div>
      </section>

    );
  }
}