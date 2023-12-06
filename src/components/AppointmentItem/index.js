// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {details, toggleFavorite} = props
  const {id, theTitle, theDate, isFavorite} = details

  const theUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clicked = () => {
    toggleFavorite(id)
  }

  return (
    <li className="list">
      <div className="text-cont">
        <h1 className="title-name">{theTitle}</h1>
        <p className="date-format">Date: {theDate}</p>
      </div>

      <button
        className="star-btn"
        onClick={clicked}
        type="button"
        data-testid="star"
      >
        <img src={theUrl} className="star" alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
