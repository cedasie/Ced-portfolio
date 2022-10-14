import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// import { box } from "../assets/css/styles.module.css"
import TwitterLogo from "../assets/twitter-2.svg"
import GithubLogo from "../assets/github-icon.svg"
import Head from "../components/head"

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <div className="content">
          <section className="hero">
            <img className="opacity-30" src="../assets" alt="" />
            <div className="hero-content">
              <h1>
                Passionate
                <br />
                FullStack Developer
              </h1>
              <p>
                I'm Cédric a FullStack developer. I've worked on many website
                projects and applications. I'm passionate about my work.
              </p>
              <Link to="/projects" className="action-btn">
                See My Projects
              </Link>
            </div>
          </section>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white/50 rounded-r-full mb-16">
          <footer className="py-16 mx-auto">
            <div className="m-auto px-6 text-gray-500">
              <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center">
                <div className="order-last mb-6 space-y-6 md:mb-0">
                  <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">
                    Get in touch
                  </h1>
                  <p className="text-lg">
                    Find me on other platforms: Twitter & Github
                  </p>
                  <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <button
                      type="button"
                      title="Start buying"
                      className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-500 shadow-xl hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-500 sm:w-max"
                    >
                      <a
                        href="https://github.com/cedasie"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="mx-auto w-16 h-16"
                          src={GithubLogo}
                          alt="See my Repo"
                        />
                      </a>
                      <span className="block text-white font-semibold">
                        Github
                      </span>
                    </button>
                    <button
                      type="button"
                      title="more about"
                      className="w-full order-first py-3 px-6 text-center rounded-xl bg-blue-200 transition hover:bg-blue-300 active:bg-blue-300 focus:bg-blue-300 sm:w-max"
                    >
                      <a
                        href="https://twitter.com/Ced_Create"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="mx-auto w-16 h-16"
                          src={TwitterLogo}
                          alt="Follow me on Twitter"
                        />
                      </a>
                      <span className="block text-gray-600 font-semibold">
                        Twitter
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/*  */}
        {/*  */}
      </Layout>
    </>
  )
}
