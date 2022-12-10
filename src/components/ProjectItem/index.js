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
        <button type="button" onClick={onClickBtn}>
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ProjectItem
