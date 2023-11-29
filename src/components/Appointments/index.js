// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'
const initAppointmentsList = [
  {
    id: uuidv4(),
    title: '',
    date: '',
    isFavorite: false,
  },
]

class Appointments extends Component {
  state = {
    appointmentList: initAppointmentsList,
    title: '',
    date: '',
    isClicked: false,
    theClass: '',
  }

  addTitle = event => {
    const newTitle = event.target.value
    this.setState({title: newTitle})
  }
  addDate = event => {
    const newDate = event.target.value
    this.setState({date: newDate})
  }
  submitDetail = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newComment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }
    if (title !== '' && date !== '') {
      this.setState(prevState => ({
        appointmentList: [...prevState.appointmentList, newComment],
      }))
    }
  }

  toggleFavorite = id => {
    const {appointmentList} = this.state
    const {isFavorite} = appointmentList
    const updatedList = appointmentList.map(each => {
      if (each.id === id) {
        return {...each, isFavorite: !isFavorite}
      }
      return each
    })
    this.setState({appointmentList: updatedList})
  }

  filterStarred = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    const {isClicked, appointmentList} = this.state
    const classy = isClicked ? 'added-class' : ''
    this.setState({theClass: classy})
    if (isClicked === true) {
      const starredList = appointmentList.filter(
        each => each.isFavorite === true,
      )
      this.setState({appointmentList: starredList})
    } else {
      this.setState(prevState => ({appointmentList: prevState.appointmentList}))
    }
  }

  render() {
    const {appointmentList, theClass} = this.state
    return (
      <div className="the-cont">
        <div className="card">
          <div className="upper-cont">
            <form className="my-form" onSubmit={this.submitDetail}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                className="bar"
                id="title"
                onChange={this.addTitle}
              />

              <label htmlFor="date" className="title">
                TITLE
              </label>
              <input
                type="date"
                className="bar"
                id="date"
                onChange={this.addDate}
              />
              <button type="button" className="btn">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>

          <hr />

          <div className="lower-cont">
            <div className="head">
              <h1 className="tag">Appointments</h1>
              <button
                className={`starred-btn ${theClass}`}
                type="button"
                onClick={this.filterStarred}
              >
                Starred
              </button>
            </div>

            <ul className="lists">
              {appointmentList.map(each => (
                <AppointmentItem
                  details={each}
                  key={each.id}
                  toggleFavorite={this.toggleFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
