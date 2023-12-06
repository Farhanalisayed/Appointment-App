import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
    isClicked: false,
    theClass: '',
  }

  addTitle = event => {
    this.setState({title: event.target.value})
  }

  addDate = event => {
    this.setState({date: event.target.value})
  }

  submitDetail = event => {
    event.preventDefault()
    const {title, date} = this.state
    const formattedDate = format(new Date(theDate), 'dd MMMM yyyy, EEEE')
    const newComment = {
      id: uuidv4(),
      theTitle: title,
      theDate: formattedDate,
      isFavorite: false,
    }
    if (title !== '' && date !== '') {
      this.setState(prevState => ({
        appointmentList: [...prevState.appointmentList, newComment],
        title: '',
        date: '',
      }))
    }
  }

  toggleFavorite = id => {
    const {appointmentList} = this.state
    const updatedList = appointmentList.map(each => {
      if (each.id === id) {
        return {...each, isFavorite: !each.isFavorite}
      }
      return each
    })
    this.setState({appointmentList: updatedList})
  }

  filterIt = () => {
    const {isClicked} = this.state
    const classy = isClicked ? 'starred-btn' : 'normal-btn'
    this.setState({theClass: classy})
    if (isClicked === true) {
      this.setState(prevState => ({
        appointmentList: prevState.appointmentList.filter(
          each => each.isFavorite === true,
        ),
      }))
    } else {
      this.setState(prevState => ({appointmentList: prevState.appointmentList}))
    }
  }

  filterStarred = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    this.filterIt()
  }

  render() {
    const {appointmentList, theClass, title, date} = this.state

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
                value={title}
                type="text"
                className="bar"
                id="title"
                placeholder="Title"
                onChange={this.addTitle}
              />

              <label htmlFor="date" className="title">
                TITLE
              </label>
              <input
                value={date}
                type="date"
                className="bar"
                id="date"
                placeholder="dd/mm/yyyy"
                onChange={this.addDate}
              />
              <button type="submit" className="btn">
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
                className={theClass}
                type="button"
                onClick={this.filterStarred}
              >
                Starred
              </button>
            </div>

            <ul className="lists">
              {appointmentList.map(each => (
                <AppointmentItem
                  key={each.id}
                  details={each}
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
