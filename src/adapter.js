class API {

  constructor(port = 3000) {
    this.port = port
  }

  parseJSON = res => res.json()

  headers = { 'Accepts': 'application/json', 'Content-Type': 'application/json' }

  // Getter Helpers

  get URL() {
    return `http://localhost:${this.port}/`
  }

  get locationsURL() {
    return this.URL + 'locations'
  }

  get tripsURL() {
    return this.URL + 'trips'
  }

  // Trips

  getAllTrips = () => fetch(this.tripsURL).then(this.parseJSON)

  getTrip = id => fetch(`${this.tripsURL}/${id}`).then(this.parseJSON)

  postTrip = body => fetch(this.tripsURL, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  updateTrip = body => fetch(`${this.tripsURL}/${body.id}`, {
    method: "PATCH",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  deleteTrip = id => fetch(`${this.tripsURL}/${id}`, {
    method: "DELETE",
    headers: this.headers
  }).then(this.parseJSON)

  // Locations

  getAllLocations = () => fetch(this.locationsURL).then(this.parseJSON)

  getLocation = id => fetch(`${this.locationsURL}/${id}`).then(this.parseJSON)

  postLocation = body => fetch(this.locationsURL, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  updateLocation = body => fetch(`${this.locationsURL}/${body.id}`, {
    method: "PATCH",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  deleteTrip = id => fetch(`${this.locationsURL}/${id}`, {
    method: "DELETE",
    headers: this.headers
  }).then(this.parseJSON)

}
