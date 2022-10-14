import * as React from "react"

export default function Footer() {
  return (
    <footer>
      <p className="foot">
        &copy; CedPortfolio {new Date().getFullYear()} ⌲ Made with{" "}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>
      </p>
    </footer>
  )
}

// export default Footer
