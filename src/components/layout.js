import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        {/* <main>{children}</main> */}
        <Footer>
          {/* <div>
            © <a href="https://designcode.io/">Design+Code</a>, {new Date().getFullYear()}
          </div>
          <div>
            Built with {" "}
            <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://www.shopify.com">Shopify</a>
          </div>
          <div>
            <a href="https://github.com/stephdiep/gatsby-shopify-tutorial">Source code</a>
          </div> */}
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Footer = styled.footer`
    background: #000;
    width: 100%;
    height: 150px;
`
