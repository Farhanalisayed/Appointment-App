// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, toggleFavorite} = props
  const {id, title, date, isFavorite} = details
  const formattedDate = format(date, 'dd MMMM yyyy, EEEE')

  const theStar = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list">
      <div className="text-cont">
        <h1 className="title-name">{title}</h1>
        <p className="date-format">{formattedDate}</p>
      </div>
      <img src={theStar} className="star" />
    </li>
  )
}
export default AppointmentItem
