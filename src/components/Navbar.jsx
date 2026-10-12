function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
          StudentPortal
        </a>

        <ul className="navbar-nav me-auto flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>Students</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>Reports</a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          {/* Mockup only: dropdown is not wired up */}
          <a className="nav-link dropdown-toggle" href="#" onClick={(e) => e.preventDefault()}>
            Settings
          </a>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
