import React, { Component } from 'react';


export default class Skills extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="skills">
                <h2 className='workHear'>Skills</h2>
                <div className="row skill">

                    <p>
                            {resumeData.skillsDescription}
                        </p>
                        <ul className="skills">
                            {
                                resumeData.skills && resumeData.skills.map((item) => {
                                    return (
                                        <div key={item.key} className="skill-flex">
                                            <i key={item.key} className={`devicon-${item.skillname.toLowerCase()} colored large`}></i>
                                        </div>
                                    )
                                })
                            }

                        </ul>
              
                </div>
            </section>
        );
    }
}