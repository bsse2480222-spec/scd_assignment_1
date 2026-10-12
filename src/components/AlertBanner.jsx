function AlertBanner() {
  return (
    <div className="alert alert-info alert-dismissible mb-4" role="alert">
      Student records have been successfully updated.
      {/* Mockup only: close button does nothing (no data-bs-dismiss) */}
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  )
}

export default AlertBanner
