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
            <h1><strong>York Logic Ltd.</strong></h1>
            <p>Expert support and solutions for your business's cloud computing needs</p>
            <div>
              <Button href="mailto:ketan@yorklogic.com" buttontype="primary">Contact Me</Button>
              <Button href="/about" buttontype="secondary">About Me</Button>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-md-6">
        </div>
        <div className="col-md-6 yorkimage">
        </div>
      </div>
    </>


    // <HeroBanner bannertitle="York Logic" bannertext="Expert support and solutions for your business's cloud computing needs" primarybutton="Contact Me" secondarybutton="About Me">
    //   <Button href="mailto:ketan@yorklogic.com" buttontype="primary">Contact Me</Button>
    //   <Button href="/about" buttontype="secondary">About Me</Button>



    // </HeroBanner>
  )
}
