import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      location.href = 'https://ductn.info/pdf/ductn_CV.pdf'
      // <div>
      //   <Grid>
      //     <Cell col={4}>
      //       <div style={{textAlign: 'center'}}>
      //         <img
      //           src="/img/D_title.png"
      //           alt="avatar"
      //           style={{height: '200px'}}
      //            />
      //       </div>

      //       <h2 style={{paddingTop: '2em'}}>Tran Duc</h2>
      //       <h4 style={{color: 'grey'}}>Developer</h4>
      //       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      //       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      //       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      //       <h5>Address</h5>
      //       <p>Ha Noi, Viet Nam</p>
      //       <h5>Phone</h5>
      //       <p>+84 XXX-XXX</p>
      //       <h5>Email</h5>
      //       <p>ductn@devtel.com</p>
      //       <h5>Web</h5>
      //       <p>ductnn.github.io</p>
      //       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      //     </Cell>
      //     <Cell className="resume-right-col" col={8}>
      //       <h2>Education</h2>


      //         <Education
      //           startYear={2016}
      //           endYear={2021}
      //           schoolName="My Posts and Telecommunications Institute of Technology"
      //           schoolDescription="Major: Electronics and Telecommunications"
      //           />

      //       <hr style={{borderTop: '3px solid #e22947'}} />

      //       <h2>Experience</h2>

      //         <Experience
      //           startYear={2016}
      //           endYear= "present"
      //           jobName="Network & System"
      //           jobDescription="Routing & Switching, Network Automation, Docker & Linux Command"
      //           />

      //           <Experience
      //             startYear={2016}
      //             endYear= "present"
      //             jobName="Coding"
      //             jobDescription="IoT: Smart Farm, Web Developer"
      //             />

      //         <hr style={{borderTop: '3px solid #e22947'}} />
      //         <h2>Skills</h2>
      //         <Skills
      //           skill="javascript"
      //           progress={100}
      //           />
      //           <Skills
      //             skill="HTML/CSS"
      //             progress={80}
      //             />
      //             <Skills
      //               skill="NodeJS"
      //               progress={50}
      //               />
      //               <Skills
      //                 skill="React"
      //                 progress={25}
      //                 />


      //     </Cell>
      //   </Grid>
      // </div>
    )
  }
}

export default Resume;
