import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HeroBanner, Button, Card } from "../components";

export default function Clients() {
  const content = [
    {
      title: "Major Retailer in Canada",
      bullets: [
        "GCP (Google Cloud Platform), Kubernetes, Microservices, GitLab, Apigee - architecture and DevOps consulting and implementation",
        "Application modernization and cloud migration",
      ],
    },
    {
      title: "Credit Reporting Company",
      bullets: [
        "GCP (Google Cloud Platform), Kubernetes, Big Data, Apigee - architecture and consulting",
      ],
    },
    {
      title: "Financial Enterprise",
      bullets: [
        "Ground-up setup of GCP organization, networking, and infrastructure",
        "Solutioning and architecture for new products on GCP and Kubernetes",
        "DevOps architecture, implementation, and ongoing support",
        "Apigee X setup, architecture, and onboarding",
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
        <meta
          name="keywords"
          content="GCP clients, Google Cloud Platform clients, satisfied clients, successful projects"
        />
        <meta
          name="description"
          content="See a list of our satisfied clients and successful projects we've completed with the help of Google Cloud Platform"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ketan Pandya" />
      </Head>

      {/**
       * Page Content
       */}
      <div className="solution-content">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 pe-5 pt-5 solution-content-left">
              <h1 className="solution-title">
                <strong>Clients</strong>
              </h1>
              <div className="solution-line mb-3"></div>
              <h2>
                Trusted by leading organizations across industries to optimize
                their use of Google Cloud Platform and drive digital
                transformation
              </h2>
            </div>
            <div className="col-md-6 solution-content-right ps-5 pt-5">
              <h1 className="solution-title invisible">
                <strong>Services</strong>
              </h1>
              <div className="solution-line mb-3"></div>
              <div>
                {content.map((contentItem) => {
                  return (
                    <div className="mb-5">
                      <h3>
                        <strong>{contentItem.title}</strong>
                      </h3>
                      <ul>
                        {contentItem.bullets.map((bullet) => {
                          return <li>{bullet}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row solution-row">
        <div className="col-md-6 solution-left red"></div>
        <div className="col-md-6 solution-right">
          <div className="col-md-6 solution-content-right ps-5 pt-5">
            <div className="invisible">
              <h1 className="solution-title">
                <strong>Clients</strong>
              </h1>
              <div className="solution-line mb-3"></div>
              {content.map((contentItem) => {
                return (
                  <div className="mb-5">
                    <h3>
                      <strong>{contentItem.title}</strong>
                    </h3>
                    <ul>
                      {contentItem.bullets.map((bullet) => {
                        return <li>{bullet}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
