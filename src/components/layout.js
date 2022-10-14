import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-full container">
        <Header />
        <div className="content-wrap">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
