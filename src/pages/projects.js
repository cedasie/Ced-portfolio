import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import * as projectStyles from "./projects.module.css"

import Angular from "../assets/frontend/angular.svg"
import railsLogo from "../assets/frontend/rails.svg"
import reactLogo from "../assets/frontend/react.svg"
import nodeLogo from "../assets/backend/node.svg"
import html from "../assets/frontend/html.svg"

const projects = () => {
  return (
    <>
      <Head title="My Projects" />
      <Layout>
        <article className="content">
          <h1>Projects </h1>
          <div className={projectStyles.cards}>
            <a
              href="https://proshopced.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>
                    E-Commerce with Paypal
                  </strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={reactLogo}
                  alt="React Logo"
                />
                <p className={projectStyles.cardPara}>
                  MERN <br />
                  Redux
                </p>
              </section>
            </a>
            <a
              href="https://pw-cedcreate.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>
                    Password Generator
                  </strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={Angular}
                  alt="Angular Logo"
                />
                <p className={projectStyles.cardPara}>
                  Angular <br />
                </p>
              </section>
            </a>
            <a
              href="https://countdown-cedfolio.surge.sh"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Countdown app</strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={reactLogo}
                  alt="React Logo"
                />
                <p className={projectStyles.cardPara}>
                  React <br />
                </p>
              </section>
            </a>
            <a
              href="https://ced-node-app-chat.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>
                    Simple Chat App
                  </strong>
                </h4>

                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={nodeLogo}
                  alt="Node Logo"
                />
                <p className={projectStyles.cardPara}>
                  Javascript <br />
                  NodeJs
                </p>
              </section>
            </a>
            <a
              href="https://expensify-app-2.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Expensify App</strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={reactLogo}
                  alt="React Logo"
                />
                <p className={projectStyles.cardPara}>
                  Javascript <br />
                  ReactJs
                </p>
              </section>
            </a>
            <a
              href="https://stark-dusk-30741.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Social Media</strong>
                </h4>

                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={reactLogo}
                  alt="React Logo"
                />
                <p className={projectStyles.cardPara}>
                  Javascript <br />
                  MERN
                </p>
              </section>
            </a>
            <a
              href="https://alpha-blog-ced.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Blog</strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={railsLogo}
                  alt="Rails Logo"
                />
                <p className={projectStyles.cardPara}>
                  Rails <br />
                  Ruby
                </p>
              </section>
            </a>
            <a
              href="https://ced-weather-app.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Weather App</strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={nodeLogo}
                  alt="Node Logo"
                />
                <p className={projectStyles.cardPara}>
                  NodeJs <br />
                  ExpressJs
                </p>
              </section>
            </a>
            <a
              href="https://cedcreate-sport.surge.sh/"
              target="_blank"
              rel="noreferrer"
            >
              <section className={projectStyles.card2}>
                <h4>
                  <strong className={projectStyles.title}>Landing page</strong>
                </h4>
                <img
                  className={`${projectStyles.imgSize} mx-auto`}
                  src={html}
                  alt="Node Logo"
                />
                <p className={projectStyles.cardPara}>
                  HTML <br />
                  CSS
                </p>
              </section>
            </a>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default projects
