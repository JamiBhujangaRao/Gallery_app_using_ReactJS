import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onChangeClicked = () => {
    onChangeImg(id)
  }

  const classNameOnActive = isActive ? 'tumbnail-img active' : 'tumbnail-img'

  return (
    <li className="items">
      <button className="btn" type="button" onClick={onChangeClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classNameOnActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
