import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div key={item.id} className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}<br/>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div key={item.id} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          • {item.Bullet1}<br/>
                          • {item.Bullet2}<br/>
                          • {item.Bullet3}<br/>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li key={item.id}>
                      <span className={`bar-expand ${item.id.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}