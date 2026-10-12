function Footer() {
  const link = (text) => (
    <li key={text}>
      <a href="#" className="text-white text-decoration-none" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    </li>
  )

  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-4">
      <div className="container">
        <div className="row px-3">
          <div className="col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled small mb-0">
              {['Home', 'Computer Science', 'Courses', 'Reports'].map(link)}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Info</h5>
            <ul className="list-unstyled small mb-0">
              {link('Contact Us')}
              <li>+1: 123 456 7890</li>
              <li>trm@studentportal.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center small mb-0">© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
