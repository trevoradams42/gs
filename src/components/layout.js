/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import Header from './header'
import SubNav from './sub-nav'
import Footer from './footer'
import './layout.css'

const getSubNavData = (subNav) => {
  let links
  let navTitle
  switch (subNav) {
    case 'weManage':
      navTitle = 'We Manage'
      links = [
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--orange-color)' }}
          key={1}
          to="/we-manage/"
        >
          Identification
        </Link>,
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--orange-color)' }}
          key={2}
          to="/we-manage/protection"
        >
          Protection
        </Link>,
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--orange-color)' }}
          key={3}
          to="/we-manage/maximize"
        >
          Maximize
        </Link>,
      ]
      break
    case 'youManage':
      navTitle = 'You Manage'
      links = [
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--blue-color)' }}
          key={4}
          to="/you-manage/"
        >
          Overview
        </Link>,
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--blue-color)' }}
          key={5}
          to="/you-manage/protection"
        >
          Protection
        </Link>,
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--blue-color)' }}
          key={6}
          to="/you-manage/access"
        >
          Access
        </Link>,
        <Link
          activeClassName="activeSubLink"
          className="subNavLink"
          style={{ color: 'var(--blue-color)' }}
          key={7}
          to="/you-manage/efficiency"
        >
          Efficiency
        </Link>,
      ]
      break
    case 'wePurchase':
      navTitle = 'We Purchase'
      links = []
      break

    default:
      break
  }

  return <SubNav navTitle={navTitle}>{links.map((link) => link)}</SubNav>
}

const Layout = ({ children, lightHeader = false, subNav }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="pageWrapper" tabIndex={0} role="button">
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={sidebarOpen}
        onOpen={toggleSidebar}
        onClose={toggleSidebar}
        className="sidebar"
      >
        <Footer asSidebar />
      </SwipeableDrawer>

      <Header lightBackground={lightHeader} openSidebar={toggleSidebar} />
      <div className="orangeLine" />
      {subNav ? getSubNavData(subNav) : null}
      <div className="spacer">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
