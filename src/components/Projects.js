import React, { Component } from 'react'
import Cards from './Cards'

import app1 from '../images/app1.PNG'
import app2 from '../images/app2.PNG'
import app3 from '../images/app3.png'
import app4 from '../images/app4.jpg'
import app5 from '../images/app5.png'
import app6 from '../images/app6.jpg'

export class Projects extends Component {
  render() {
    return (
      <section className="page-section" id="myprojects">

      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Cards imgsrc={app4} title="eCommerce Shopify" subtext="JAVASCRIPT, HTML, CSS, XML"
              link="https://shopluscenter.com"
            />
          </div>

          <div className="col-md-4">
            <Cards imgsrc={app5} title="Seo Service WordPress" subtext="JAVASCRIPT, HTML, CSS"
              link="https://seoboost.co.il"
            />
          </div>

          <div className="col-md-4">
            <Cards imgsrc={app6} title="Help Desk - Support" subtext="JAVASCRIPT, HTML, CSS, BOOTSTRAP, ANIMATION"
              link="https://play.google.com/store/apps/details?id=com.myapp.yossibe.brachot&hl=en_US"
            />
          </div>
      
      </div>
    </div><br />

    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Cards imgsrc={app1} title="Eye-level Judaism (Android)" subtext="JAVA, HTML, CSS, XML, FIREBASE, JSON"
              link="https://play.google.com/store/apps/details?id=app.example.yossi.jewishapp&hl=en_US"
            />
          </div>

          <div className="col-md-4">
            <Cards imgsrc={app2} title="Brachot board (Android)" subtext="JAVASCRIPT, HTML, CSS, XML"
              link="https://play.google.com/store/apps/details?id=com.myapp.yossibe.brachot&hl=en_US"
            />
          </div>

          <div className="col-md-4">
            <Cards imgsrc={app3} title="eCommerce (Android)" subtext="JAVASCRIPT, HTML, CSS, XML"
              link="https://play.google.com/store/apps/details?id=com.shopping.center.android&hl=en_US"
            />
          </div>
        </div> 
      </div>
    </section>
    )
  }
}

export default Projects

