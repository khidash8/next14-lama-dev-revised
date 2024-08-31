import Link from "next/link"
import React from "react"

const Links = () => {
  const routes = [
    {
      title: "FizzleBugs",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ]

  return (
    <>
      {routes.map((rout) => (
        <Link href={rout.path} key={rout.title}>
          {rout.title}
        </Link>
      ))}
    </>
  )
}

export default Links
