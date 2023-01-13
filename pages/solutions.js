import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button, Card } from '../components'


export default function About() {
    const certList = ["Google Cloud Certified Professional Cloud Architect",
        "Google Cloud Certified Professional Cloud Network Engineer",
        "Google Cloud Certified Professional Cloud Security Engineer",
        "CNCF Certified Kubernetes Administrator",
        "CNCF Certified Kubernetes Developer",
        "TOGAF"
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
            <div className="container">
                <h1>About Us</h1>
            </div>
            <div className="aboutmain">
                <div className="container">
                    <h2 className="fw-bold my-4">Certifications</h2>
                    <div className="row g-4">
                        {
                            certList.map((certName) => {
                                return (

                                    <div className="col-lg-3 col-md-3 col-sm-1">
                                        <Card>
                                            {certName}
                                        </Card>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>

                    <h2 className="fw-bold my-4">Our Competencies</h2>

                    <div className="row gx-4">
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="GCP and Kubernetes" cardsubtitle="">
                                <ul>
                                    <li>
                                        Applications and infrastructure modernisation
                                    </li>
                                    <li>
                                        Legacy applications re-architecting and migration to cloud
                                    </li>
                                    <li>
                                        Green field architecture
                                    </li>
                                    <li>
                                        New infrastructure through Terraform IaC, networking, security setup
                                    </li>
                                </ul>

                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="DevOps" cardsubtitle="">
                                <ul>
                                    <li>GitLab, GitHub, GCP cloud build</li>
                                    <li>CI/CD setup and consulting</li>
                                    <li>Monitoring setup</li>
                                    <li>Systems administration and on going support</li>
                                </ul>

                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="SRE support" cardsubtitle="">
                                <ul>
                                    <li>
                                        Monitoring, business continuity consulting and implementation
                                    </li>
                                </ul>

                            </Card>
                        </div>

                    </div>

                    <h2 className="fw-bold my-4">Enterprise Clients</h2>
                    <div className="row gx-4">
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="Major Retailor in Canada" cardsubtitle="">
                                <ul>
                                    <li>
                                        GCP, Kubernetes, GitLab, Apigee -  architecture and DevOps consulting and implementation
                                    </li>
                                    <li>
                                        Monolith to microservices migration
                                    </li>
                                </ul>

                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="Credit Reporting Company" cardsubtitle="">
                                <ul>
                                    <li>
                                        GCP, Kubernetes, BigData, Apigee – architecture and consulting
                                    </li>
                                </ul>

                            </Card>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <Card cardtitle="Financial Enterprise" cardsubtitle="">
                                <ul>
                                    <li>
                                        Ground up setup of GCP organization, networking and infrastructure
                                    </li>
                                    <li>

                                        Solutioning and architecture for a new products on GCP and Kubernetes
                                    </li>
                                    <li>
                                        Devops setup and ongoing support
                                    </li>
                                    <li>
                                        ApigeeX setup, architecture and onboarding
                                    </li>
                                </ul>

                            </Card>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
