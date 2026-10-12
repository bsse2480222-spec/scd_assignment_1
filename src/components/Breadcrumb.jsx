function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-dark rounded px-3 py-2 mb-3 mt-3 text-light">
        <li className="breadcrumb-item">.breadcrumb</li>
        <li className="breadcrumb-item">breadcrumb-item</li>
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Students</li>
        <li className="breadcrumb-item active" aria-current="page">Directory</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
