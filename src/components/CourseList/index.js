import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//pode ser uma action
function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const courses = useSelector(state => state.data)
  const dispatch = useDispatch()

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', title: 'Redux' })
    dispatch(addCourseAction('Tipo dispatch'))
  }

  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  )
}