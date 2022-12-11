import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button } from '../components'


export default function Home() {
  return (
    <HeroBanner bannertitle="York Logic" bannertext="Expert support and solutions for your business's cloud computing needs" primarybutton="Contact Me" secondarybutton="About Me">
      <Button href="mailto:ketan@yorklogic.com" buttontype="primary">Contact Me</Button>
      <Button href="/about" buttontype="secondary">About Me</Button>



    </HeroBanner>
  )
}
