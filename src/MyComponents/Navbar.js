import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className=" mt-3 navbar container bg-danger navbar-light">
                <div className="container">
                    <a className="navbar-brand"><h3>Todos List</h3></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
