import React from 'react'

function About() {
    return (
        <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2016 - Currently</h4>
                      <h4 className="subheading">'College of Management Rishon Lezion'</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      2018 - Currently - Expert in Office 365, WordPress, SharePoint<br/> 2017 - Network and Infrastructure Technician, IT<br/>
                      2016 - Technical Support Team Leader<br/> Click here to see full CV
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2013 - 2014</h4>
                      <h4 className="subheading">Help Desk Support, Union Bank - Transaction through 'Taldor'</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                      Technical service for bank employees and software support<br />Solving computer malfunctions, network equipment and printers.
                        <br/> Click here to see full CV
                      </p>                    
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009 - 20012</h4>
                      <h4 className="subheading">Technical Support, 'NetVision'</h4>
                    </div>
                    <div className="timeline-body">
                    <p className="text-muted">
                        Support for routers<br/>Installing ip cameras<br />VOIP telephony failures
                        <br/> Click here to see full CV
                      </p>
                      <p className="text-muted">
                      <be /> 
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
