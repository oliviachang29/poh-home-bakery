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
              <Link to="#order" className="nav-link">Order</Link>
            </li>
            <li className='nav-item hidden-md'>
              <Link to="#menu" className="nav-link">Menu</Link>
            </li>
            <li className='nav-item hidden-sm'>
              <div className="nav-link">Call: <Link to="tel:60194973778">60194973778</Link></div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navi
