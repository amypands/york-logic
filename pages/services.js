import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button, Card } from '../components'


export default function Services() {
    const content = [
        {
            title: "Consulting",
            description: "Short or long term adhoc or ongoing consultation in the area of needs - solutioning, Google Cloud, Cloud Native"
        },
        {
            title: "Project collaborative outsourcing",
            description: "We can provid solutioning, implementation, ongoing support and knowledge transfer"
        }
    ]

    return (
        <>
            {/**
             * To add the browser/tab title
             */}
            <Head>
                <title>About</title>
            </Head>

            {/**
             * Page Content
             */}
            <div className="solution-content">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 pe-5 pt-5 solution-content-left">
                            <h1 className="solution-title"><strong>Services</strong></h1>
                            <div className="solution-line mb-3"></div>
                            <h2>Expertly crafted GCP solutions tailored to your unique business needs</h2>
                        </div>
                        <div className="col-md-6 solution-content-right ps-5 pt-5">
                            <h1 className="solution-title invisible"><strong>Services</strong></h1>
                            <div className="solution-line mb-3"></div>
                            <div>{
                                content.map(
                                    (contentItem) => {
                                        return (
                                            <div className="mb-5">
                                                <h3><strong>{contentItem.title}</strong></h3>
                                                <p>{contentItem.description}</p>

                                            </div>
                                        )
                                    }
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row solution-row">
                <div className="col-md-6 solution-left yellow"></div>
                <div className="col-md-6 solution-right">
                    <div className="col-md-6 solution-content-right ps-5 pt-5">
                        <div className="invisible">
                            {
                                content.map(
                                    (contentItem) => {
                                        return (
                                            <div className="mb-4">
                                                <h3><strong>{contentItem.title}</strong></h3>
                                                <p>{contentItem.description}</p>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
