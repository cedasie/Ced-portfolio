import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as aboutStyles from "./about.module.css"

import JS from "../assets/frontend/javascript-logo.svg"
import HTML from "../assets/frontend/html.svg"
import CSS from "../assets/frontend/css-5.svg"
import Python from "../assets/backend/python.svg"
import Django from "../assets/frontend/django-logo.svg"
import Flask from "../assets/frontend/flask.svg"
import PHP from "../assets/backend/php-logo.svg"
import WordPress from "../assets/frontend/wordpress.svg"
import FirebaseLogo from "../assets/backend/firebase-1.svg"
import Ruby from "../assets/backend/ruby.svg"
import Rails from "../assets/frontend/rails.svg"
import Gatsby from "../assets/frontend/gatsby.svg"
import ReactJS from "../assets/frontend/react.svg"
import Angular from "../assets/frontend/angular.svg"
import Nodejs from "../assets/backend/node.svg"
import NExtJs from "../assets/frontend/nextjs-3.svg"
import Jquery from "../assets/frontend/jquery-1.svg"
import Vue from "../assets/frontend/vue-js.svg"
import Swift from "../assets/mobile/swift-logo.svg"
import Android from "../assets/mobile/android-logo.svg"
import Flutter from "../assets/mobile/flutter-logo.svg"
import Dart from "../assets/mobile/dart.svg"
import MongoDB from "../assets/backend/mongodb.svg"
import Mysql from "../assets/backend/mysql-7.svg"
import Postgres from "../assets/backend/postgresql.svg"
import Laravel from "../assets/frontend/laravel-2.svg"

const about = () => {
  return (
    <>
      <Head title="About me" />
      <Layout>
        <article className="content">
          <div className="hero">
            <div className={aboutStyles.heroContent}>
              <h2>About me</h2>
              <p>
                I love to play with code. It became a passion since I started
                developing some websites or applications. I can code with
                different types of languages but I have a preference for
                Javascript and Python.
              </p>
            </div>
          </div>

          <h3>I'm coding on Frontend</h3>
          <div className={aboutStyles.gridContainer}>
            <section>
              <img className={aboutStyles.imgSize} src={JS} alt="javascript" />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={HTML} alt="html" />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={CSS} alt="css" />
            </section>

            <section>
              <img
                className={aboutStyles.imgSize}
                src={ReactJS}
                alt="ReactJS"
              />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={Gatsby} alt="Gatsby" />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={NExtJs} alt="NExtJs" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={Angular}
                alt="Angular"
              />
            </section>

            <section>
              <img className={aboutStyles.imgSize} src={Vue} alt="Vue" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSizeBigger}
                src={Jquery}
                alt="Jquery"
              />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={Laravel}
                alt="Laravel"
              />
            </section>
            <section>
              <img
                className={aboutStyles.imgSizeBigger}
                src={Django}
                alt="Django"
              />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={Flask} alt="Flask" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSizeBigger}
                src={Rails}
                alt="Rails"
              />
            </section>

            <section>
              <img
                className={aboutStyles.imgSize}
                src={WordPress}
                alt="WordPress"
              />
            </section>
          </div>
          {/* backend */}
          <h3>I'm coding on Backend</h3>
          <div className={aboutStyles.gridContainer}>
            <section>
              <img className={aboutStyles.imgSize} src={Python} alt="Python" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSizeBigger}
                src={Nodejs}
                alt="Nodejs"
              />
            </section>
            <section>
              <img className={aboutStyles.imgSizeBigger} src={PHP} alt="PHP" />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={Ruby} alt="Ruby" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={FirebaseLogo}
                alt="FirebaseLogo"
              />
            </section>
            <section>
              <img
                className={aboutStyles.imgSizeBigger}
                src={MongoDB}
                alt="MongoDB"
              />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={Mysql} alt="Mysql" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={Postgres}
                alt="Postgres"
              />
            </section>
          </div>
          {/* Mobile */}
          <h3>I'm coding on Mobile</h3>
          <div className={aboutStyles.gridContainer}>
            <section>
              <img className={aboutStyles.imgSize} src={Swift} alt="Swift" />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={Android}
                alt="Android"
              />
            </section>
            <section>
              <img
                className={aboutStyles.imgSize}
                src={Flutter}
                alt="Flutter"
              />
            </section>
            <section>
              <img className={aboutStyles.imgSize} src={Dart} alt="Dart" />
            </section>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default about
