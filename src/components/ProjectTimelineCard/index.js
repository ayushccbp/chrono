import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectList} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectList
  console.log(imageUrl)

  return (
    <div>
      <img className="image" src={imageUrl} alt="project" />
      <div className="top-container">
        <h1>{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="anchor-tag" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
