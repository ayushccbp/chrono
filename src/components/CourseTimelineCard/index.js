import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, description, duration, tagsList} = courseList
  return (
    <div className="course-container">
      <div className="top-container">
        <h1>{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list">
        {tagsList.map(eachValue => (
          <li className="list-para" key={eachValue.id}>
            <p>{eachValue.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
