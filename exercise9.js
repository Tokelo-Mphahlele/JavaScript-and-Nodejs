const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

function deleteStudent (studentToDelete, students) {
  return students.filter(student =>
    student.name !== studentToDelete.name ||
        student.studentNumber !== studentToDelete.studentNumber ||
        student.yearOfStudy !== studentToDelete.yearOfStudy
  )
}
const modifiedArray = deleteStudent({
  name: 'Pieter',
  studentNumber: 454345,
  yearOfStudy: 3
}, students)

/* console.log(students.findIndex(function (element) {
  return element.name === 'Kiren' &&
    element.studentNumber === 567893 &&
    element.yearOfStudy === 4
})) */

// delete students[3]
// console.log(students)

console.log(modifiedArray)
