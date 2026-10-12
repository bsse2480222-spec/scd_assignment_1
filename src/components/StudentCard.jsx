function StudentCard({ name, id, major, year, gpa }) {
  return (
    <div className="card h-100 shadow-sm">
      <div
        className="bg-secondary-subtle d-flex align-items-end justify-content-center overflow-hidden"
        style={{ height: '72px' }}
      >
        {/* Placeholder avatar */}
        <svg width="70" height="62" viewBox="0 0 70 62" aria-hidden="true">
          <circle cx="35" cy="20" r="17" fill="#6c757d" />
          <path d="M3 62 C3 40 20 36 35 36 C50 36 67 40 67 62 Z" fill="#6c757d" />
        </svg>
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text small mb-0">ID: {id}</p>
        <p className="card-text small mb-0">Major: {major}</p>
        <p className="card-text small mb-0">Year: {year}</p>
        <p className="card-text small mb-3">GPA: {gpa}</p>

        <div className="d-flex flex-wrap gap-1">
          <button type="button" className="btn btn-outline-primary btn-sm">View Profile</button>
          <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
          <button type="button" className="btn btn-outline-danger btn-sm">.btn-outline-primary</button>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
