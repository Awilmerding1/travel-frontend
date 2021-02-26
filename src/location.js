class Location {

  constructor(loc) {
      this.id = loc.id
      this.name = loc.name
      this.lat = loc.lat
      this.long = loc.long
      this.trips = loc.trips.map((trip) => new Trip(trip))
  }


}
