import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Carousel, Row, Col } from 'antd'

export default class About extends Component {

   getOption = () => {
      return {
         backgroundColor: 'white',

         tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
         },

         visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
               colorLightness: [0, 1]
            }
         },
         series: [
            {
               name: 'Source coming',
               type: 'pie',
               radius: '55%',
               center: ['50%', '50%'],
               data: [
                  { value: 335, name: 'Basketball' },
                  { value: 310, name: 'Hiking' },
                  { value: 200, name: 'Coking' },
                  { value: 300, name: 'Traveling' },
                  { value: 320, name: 'READING' },
               ].sort(function (a, b) { return a.value - b.value; }),
               roseType: 'radius',
               label: {
                  normal: {
                     textStyle: {
                        color: 'black'
                     }
                  }
               },
               labelLine: {
                  normal: {
                     lineStyle: {
                        color: 'gray'
                     },
                     smooth: 0.2,
                     length: 10,
                     length2: 20
                  }
               },
               itemStyle: {
                  normal: {
                     color: '#c23531',
                     shadowBlur: 200,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
               },

               animationType: 'scale',
               animationEasing: 'elasticOut',
               animationDelay: function (idx) {
                  return Math.random() * 200;
               }
            }
         ]
      }
   }

   render() {
      // let resumeData = this.props.resumeData;
      return (
         <section id="about">

            <div className='workHear'>Hobbies</div>
            <Row className="aboutRow">
               <Col span={12}>
                  <Carousel autoplay>
                     <div>
                        <img src="images/Eating.png" alt="Cooking" />
                        <h3>Cooking</h3>
                     </div>
                     <div>
                        <img src="images/Hiking.jpg" alt="Hiking" />
                        <h3>Hiking</h3>
                     </div>
                     <div>
                        <img src="images/Basketball.jpg" alt="Basketball" />
                        <h3>Basketball</h3>
                     </div>
                  </Carousel>
               </Col>
               <Col span={12}>
                  <ReactEcharts option={this.getOption()} />
               </Col>
            </Row>

         </section>
      );
   }
}