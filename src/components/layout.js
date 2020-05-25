import React from "react"
import { useStaticQuery, Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
            stackoverflow
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, simplified.io
        <br/>

        {social.twitter && <a target="_blank" href={social.twitter}>twitter</a>}
        {' • '}
        {social.github && <a target="_blank" href={social.github}>github</a>}
        {' • '}
        {social.linkedin && <a target="_blank" href={social.linkedin}>linkedin</a>}
        {' • '}
        {social.stackoverflow && <a target="_blank" href={social.stackoverflow}>stackoverflow</a>}
      </footer>
    </div>
  )
}

export default Layout
