import React, { Component } from 'react'
import '../App.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">My Projects</a>
              <button className="navbar-toggler navbar-toggler-right" type="button"
               data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">

            {/* ----- Links ----- */}
            <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About Me</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#myprojects">My Projects</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" style={{ color:'white'}}
                    href="#contact">Contact</Link>
                  </li> */}

                </ul>
              </div>
            </div>
          </nav>
        
        )
    }
}

export default Navbar
