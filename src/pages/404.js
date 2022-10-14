import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className="content">
        <section className="hero">
          <div className="hero-content">
            <h1>Oh No!</h1>
            <h2>Page not found</h2>
            <p>Look at the menu</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
