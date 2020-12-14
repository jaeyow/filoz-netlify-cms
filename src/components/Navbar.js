import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/filoz-logo.png'
import classNames from 'classnames'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor...')
    this.state = {
      active: false,
      navBarActiveClass: '',
      activeMenuItem: 'Home'
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount...')
  }  

  setActiveMenuItem = (item) => {
    console.log('setActiveMenuItem ' + item)
    this.setState({activeMenuItem: item});
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    var getNavbarItemClass = (navbarItem) => {
      var activeMenuItem = this.state.activeMenuItem;
      var navBarItemClass = classNames({
        'navbar-item': true,
        'is-active': navbarItem === activeMenuItem
      })
      console.log(`getNavbarItemClass ${navbarItem}: ${navBarItemClass}`)
      return navBarItemClass
    }

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Filoz" style={{width:100}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link
                className={getNavbarItemClass('Home')}
                onClick={() => {
                  this.setActiveMenuItem('Home')
                  this.toggleHamburger()
                  }}  to="/">
                Home
              </Link>
              <Link
                className={getNavbarItemClass('Racing')}
                onClick={() => {
                  this.setActiveMenuItem('Racing')
                  this.toggleHamburger()
                  }} to="/about">
                Racing
              </Link>
              <Link
                className={getNavbarItemClass('Results')}
                onClick={() => {
                  this.setActiveMenuItem('Results')
                  this.toggleHamburger()
                  }} to="/contact">
                Results
              </Link>
              <Link
                className={getNavbarItemClass('Membership')}
                onClick={() => {
                  this.setActiveMenuItem('Membership')
                  this.toggleHamburger()
                  }} to="/contact/examples">
                Membership
              </Link>
              <Link
                className={getNavbarItemClass('Contact')}
                onClick={() => {
                  this.setActiveMenuItem('Contact')
                  this.toggleHamburger()
                  }} to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
