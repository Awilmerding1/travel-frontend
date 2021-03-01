class Location {

  static allLocations = []

  constructor(loc) {
      this.id = loc.id
      this.name = loc.name
      this.lat = loc.lat
      this.long = loc.long
      this.trips = loc.trips.map((trip) => new Trip(trip))
      Location.allLocations.push(this)
  }


    renderLocation() {
      const locContainer = document.getElementById('locationContainer')
      const locationInfo = `
        <h1>${this.name}</h1>
        ${this.trips.forEach(trip => trip.renderTrip())}
      `
      locContainer.innerHTML = locationInfo
      // new GoogleMap(this.lat, this.long).initMap()
      googleMap.initMarkers(this)
    }



    addTrip(trip) {
      this.trips.push(new Trip(trip))
    }

    static renderLocations() {
      const locContainer = document.getElementById('locationContainer')
      this.allLocations.forEach(loc => {
        const li = document.createElement('li')
        li.textContent = loc.name
        li.id = loc.id
        locContainer.append(li)
         document.getElementById(loc.id).addEventListener('click', loc.renderLocation.bind(loc))
         googleMap.initMarkers(loc)
      })
    }


    static fetchLocations() {
      fetch('http://localhost:3000/locations')
      .then(r => r.json())
      .then(locs => {
        locs.forEach(loc => new Location(loc))
      })
    }


}
