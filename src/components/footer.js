import * as React from "react"

export default function Footer() {
  return (
    <footer>
      <p className="text-center text-sm text-gray-400 border border-t-gray-300 py-6">
        &copy; CedPortfolio {new Date().getFullYear()} ⌲ Made with{" "}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>
      </p>
    </footer>
  )
}

// export default Footer
