import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HeroBanner, Button, Card } from "../components";

export default function About() {
  const certList = [
    "Google Cloud Certified Professional Cloud Architect",
    "Google Cloud Certified Professional Cloud Network Engineer",
    "Google Cloud Certified Professional Cloud Security Engineer",
    "CNCF Certified Kubernetes Administrator",
    "CNCF Certified Kubernetes Developer",
    "TOGAF",
  ];
  return (
    <>
      {/**
       * To add the browser/tab title
       */}
      <Head>
        <title>About</title>
        <meta
          name="keywords"
          content="GCP consulting, Google Cloud Platform consulting, about us, company history, team"
        />
        <meta
          name="description"
          content="Learn about our company history and team of experts dedicated to providing top-notch GCP consulting services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ketan Pandya" />
      </Head>

      {/**
       * Page Content
       */}
      <div className="about">
        <div className="container my-4">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1>
                <strong>About Us</strong>
              </h1>
              <p>
                We are a Canadian company operating in the EST time zone. Our
                team has experience delivering results for start-ups to large
                enterprises. We are selective in taking on projects so that we
                can add value to our clients.
              </p>

              <p>
                We are start-up friendly and enterprise experienced. Our
                communication with clients is straight, simple and direct.
              </p>

              <p>
                We love Google Cloud and Kubernetes and have staff members with
                certifications to attest that.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutmain">
          <div className="container  my-4">
            <h2 className="fw-bold mb-4">Certifications</h2>
            <div className="row g-4">
              {certList.map((certName) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-1">
                    <Card>{certName}</Card>
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
