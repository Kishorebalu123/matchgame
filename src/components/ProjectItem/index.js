import './index.css'

const ProjectItem = props => {
  const {projectDetails, clickTabImage} = props
  const {id, thumbnailUrl} = projectDetails

  const onClickBtn = () => {
    clickTabImage(id)
  }

  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={thumbnailUrl}
          alt={`project-item${id}`}
          onClick={onClickBtn}
        />
      </li>
    </>
  )
}

export default ProjectItem
