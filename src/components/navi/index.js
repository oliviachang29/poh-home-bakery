import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand-sm navbar-dark flex-column flex-sm-row">
        <div className="container-fluid">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className='nav-item hidden-md'>
              <a href="#order" className="nav-link">Order</a>
            </li>
            <li className='nav-item hidden-md'>
              <a href="#menu" className="nav-link">Menu</a>
            </li>
            <li className='nav-item hidden-sm'>
              <div className="nav-link">Call: <a href="tel:60194973778">60194973778</a></div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navi
