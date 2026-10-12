import StudentCard from './StudentCard'

const students = [
  { id: 101, name: 'Aayan Hussaini', major: 'Software Engineering', year: 3, gpa: 3.1 },
  { id: 102, name: 'Faris Ali', major: 'Computer Science', year: 4, gpa: 3.0 },
  { id: 103, name: 'Kanwar Ram', major: 'Software Engineering', year: 3, gpa: 3.2 },
  { id: 104, name: 'Haniyah Hussaini', major: 'Arts', year: 1, gpa: 3.2 },
]

function StudentGrid() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-3">
      {students.map((s) => (
        <div className="col" key={s.id}>
          <StudentCard {...s} />
        </div>
      ))}
    </div>
  )
}

export default StudentGrid
