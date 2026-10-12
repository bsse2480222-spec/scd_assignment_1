function Pagination() {
  return (
    <nav aria-label="Student pages" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item disabled">
          <button type="button" className="page-link">Previous</button>
        </li>
        <li className="page-item active" aria-current="page">
          <button type="button" className="page-link">1</button>
        </li>
        <li className="page-item">
          <button type="button" className="page-link">2</button>
        </li>
        <li className="page-item">
          <button type="button" className="page-link">3</button>
        </li>
        <li className="page-item">
          <button type="button" className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
