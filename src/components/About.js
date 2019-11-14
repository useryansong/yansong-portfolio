import React, { Component } from 'react';
import { Carousel } from 'antd'

export default class About extends Component {
   render() {
      // let resumeData = this.props.resumeData;
      return (
         <section id="about">

            <div className='workHear'>Hobbies</div>
            <Carousel autoplay>
               <div>
                  <img src="images/Eating.png" />
                  <h3>Eaing</h3>
               </div>
               <div>
                  <img src="images/Hiking.jpg" />
                  <h3>Hiking</h3>
               </div>
               <div>
                  <img src="images/Basketball.jpg" />
                  <h3>Basketball</h3>
               </div>
            </Carousel>
         </section>
      );
   }
}