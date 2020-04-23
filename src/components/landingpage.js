import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/img/D_title.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Developer</h1>

            <hr/>

          <p>Python | Django | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* Facebook */}
          <a href="https://facebook.com/ductn.network" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ductnn" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github" aria-hidden="true" />
          </a> 

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ductnn/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>             

          {/* Instagram */}
          <a href="https://instagram.com/ductn4" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
