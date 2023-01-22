import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
          { props.navBar ?  <nav className=" mt-3 navbar container bg-danger navbar-light">
                <div className="container">
                    <a className="navbar-brand text-light"><h3>{props.title}</h3></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav> : <h1 className='text-light'> Navbar hide </h1>
            }
        </>
    )
}

 
Navbar.propTypes = {
    title : PropTypes.string 
}

Navbar.defaultProps = {
    title : "My Todo App"
}
