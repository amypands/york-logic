import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeroBanner, Button, Card } from '../components'


export default function Clients() {
    const content = [
        {
            "title": "Major Retailor in Canada",
            bullets: [
                "GCP, Kubernetes, Microservices, GitLab, Apigee - architecture and DevOps consulting and implementation",
                "Application modernization and cloud migration"
            ],
        },
        {
            "title": "Credit Reporting Company",
            bullets: [
                "GCP, Kubernetes, BigData, Apigee – architecture and consulting"
            ],
        },
        {
            "title": "Financial Enterprise",
            bullets: [
                "Ground up setup of GCP organization, networking and infrastructure",
                "Solutioning and architecture for a new products on GCP and Kubernetes",
                "Devops architecture, implementation and ongoing support",
                "ApigeeX setup, architecture and onboarding"
            ],
        },
    ];
    return (
        <>
            {/**
             * To add the browser/tab title
             */}
            <Head>
                <title>Clients</title>
            </Head>

            {/**
             * Page Content
             */}
            <div className="about">
                <div className="container my-4">
                    <div className="row mb-5">
                        <div className="col-xs-12 col-md-6">
                            <h1><strong>Clients</strong></h1>
                            <p>
                                Trusted by leading organizations across industries to optimize their use of Google Cloud Platform and drive digital transformation
                            </p>
                        </div>

                    </div>
                </div>
                <div className="cardholder pt-5">
                    <div className="container ">
                        <div className="row">
                            {
                                content.map((contentItem) => {
                                    return (

                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <Card cardtitle={contentItem.title}>
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
                                            </Card>
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
