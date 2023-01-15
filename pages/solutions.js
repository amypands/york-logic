import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button, Card } from '../components'


export default function About() {
    const content = [
        {
            title: "Software Architecture and modernization",
            bullets: [
                "Software architecture solutions using the state of the art practices, tools and technologies. Collaborative solution architecting. Our team has experience architecting solutions in Telco, Finance, Retail and Technology companies.",
                "Legacy application rearchitecting and modernization"
            ]
        },
        {
            title: "Cloud Infrastructure Architecture",
            bullets: [
                "Design network in cloud from scratch",
                "Onboard and stand up a Google Cloud Platform organization from scratch",
                "Setup ApigeeX",
                "Services and security design",
                "On-premises to cloud migration",
                "Microservices, Kubernetes, Istio Service Mesh"
            ],
        },
        {
            title: "Cloud Migration",
            bullets: [
                "legacy application and infrastructure rearchitecting and migration to Google cloud",
                "Find the best solution with plan for future grown.  It can be lift-and-shift or rearchitecting and refitting"
            ]
        },
        {
            title: "Cloud Native",
            bullets: [
                "Leverage our experience and expertise in architecting and implementing cloud native solutions in Google's GKE",
                "Transform your legacy application into scalable cloud native microservices",
                "Scalable microservices and Istio service mesh"
            ]
        },
        {
            title: "DevOps",
            bullets: [
                "GitLab, GitHub, GCP cloud build",
                "CI/CD setup and consulting",
                "Cloud Monitoring setup",
                "Systems administration and on going support",
                "Terraform IaC"
            ]
        },
        {
            title: "Site Reliability Engineering (SRE)",
            bullets: [
                "Monitoring, business continuity consulting and implementation"
            ]
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
                            <h1 className="solution-title"><strong>Solutions</strong></h1>
                            <div className="solution-line mb-3"></div>
                            <h2>Helping you unlock the full potential of Google Cloud Platform for your business</h2>
                        </div>
                        <div className="col-md-6 solution-content-right ps-5 pt-5">
                            <h1 className="solution-title invisible"><strong>Solutions</strong></h1>
                            <div className="solution-line mb-3"></div>
                            <div>{
                                content.map(
                                    (contentItem) => {
                                        return (
                                            <div className="mb-5">
                                                <h3><strong>{contentItem.title}</strong></h3>
                                                <ul>
                                                    {
                                                        contentItem.bullets.map(
                                                            (bulletPoints) => {
                                                                return (
                                                                    <li>
                                                                        {
                                                                            bulletPoints
                                                                        }
                                                                    </li>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </ul>
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
                <div className="col-md-6 solution-left"></div>
                <div className="col-md-6 solution-right">
                    <div className="col-md-6 solution-content-right ps-5 pt-5">
                        <div className="invisible">
                            {
                                content.map(
                                    (contentItem) => {
                                        return (
                                            <div className="mb-4">
                                                <h3><strong>{contentItem.title}</strong></h3>
                                                <ul>
                                                    {
                                                        contentItem.bullets.map(
                                                            (bulletPoints) => {
                                                                return (
                                                                    <li>
                                                                        {
                                                                            bulletPoints
                                                                        }
                                                                    </li>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </ul>
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
