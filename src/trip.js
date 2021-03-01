class Trip {
  constructor(trip) {
    this.id = trip.id
    this.content = trip.content
    this.date = trip.date
    this.location_id = trip.location_id
  }


  renderTrip() {
    const tripFormElement = document.getElementById('tripFormContainer')
    const tripInfo = `
      <h3>${this.date}</h3>
      <p>${this.content}</p>
    `
  }

  static tripForm() {
    // const map = document.getElementById('map')
    // map.style.display = "none";
    const tripFormElement = document.getElementById('tripFormContainer')
    const tripForm = `
    <form id="tripForm">
      <label>Location</label>
      <input type="text" name="location" id="locInput"/><br>
      <label>Content</label>
      <input type="text" name="content" id="conInput"/><br>
      <label>Date</label>
      <input type="text" name="date" id="dateInput"/><br>
      <input type="submit" value="Add Trip"/>
    </form>
    `
    tripFormElement.innerHTML += tripForm
    document.getElementById('tripForm').addEventListener('submit', this.addTrip.bind(this))
  }


  static addTrip(e) {
    e.preventDefault()
    const location = document.getElementById('locInput')
    const content = document.getElementById('conInput')
    const date = document.getElementById('dateInput')
    const trip = {location, content, date}
    new Adapter().postTrip({trip})
    .then(trip => {
      const loc = Location.find(loc => loc.id === trip.location_id) || new Location(trip.location)
      loc.addTrip(trip)
      loc.renderLocation()
      Trip.removeTripForm()
    })
  }

  static removeTripForm() {
      document.getElementById('tripFormContainer').innerHTML = ''
  }

}
