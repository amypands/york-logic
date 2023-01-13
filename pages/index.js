import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button } from '../components'


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row gx-0 yorkheader">
          <div className="col-md-6 leftcolumn">
            <div className="hometext">
              <h1><strong>York Logic Ltd.</strong></h1>
              <div className="row">
                <div className="col-md-4 yorkdescription">
                  <p><strong>Simplify Technology</strong></p>
                  <p><strong>Be a Cloud Native in Google Cloud</strong></p>
                </div>
                <div className="col-md-8 yorkbullets">
                  <p>Custom software development</p>
                  <p>
                    Digital Transformation</p>
                  <p>Google Cloud Architecture, Onboarding  and Transformation</p>
                  <p>DevOps and SRE</p>
                </div>
              </div>
            </div>
            {/* <p>Expert support and solutions for your business's cloud computing needs</p> */}

          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <div className="row gx-0 yorkcontainer">
        <div className="col-md-12 yorkimage">
        </div>
      </div>
    </>


    // <HeroBanner bannertitle="York Logic" bannertext="Expert support and solutions for your business's cloud computing needs" primarybutton="Contact Me" secondarybutton="About Me">
    //   <Button href="mailto:ketan@yorklogic.com" buttontype="primary">Contact Me</Button>
    //   <Button href="/about" buttontype="secondary">About Me</Button>



    // </HeroBanner>
  )
}
