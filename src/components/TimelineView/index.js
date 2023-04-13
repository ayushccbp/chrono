import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="heading-description">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachValue => {
            if (eachValue.categoryId === 'COURSE') {
              return <CourseTimelineCard courseList={eachValue} />
            }
            return <ProjectTimelineCard projectList={eachValue} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
