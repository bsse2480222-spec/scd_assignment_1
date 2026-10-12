import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import PageHeader from './components/PageHeader'
import StudentGrid from './components/StudentGrid'
import Pagination from './components/Pagination'
import AlertBanner from './components/AlertBanner'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="container flex-grow-1">
        <Breadcrumb />
        <PageHeader />
        <StudentGrid />
        <Pagination />
        <AlertBanner />
      </main>

      <Footer />
    </div>
  )
}

export default App
