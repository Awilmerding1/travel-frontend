
let map;
let googleMap;


function initMap(){

    googleMap = new GoogleMap(43.000, -75.000)
    googleMap.initMap()

}


function eventListenersSetup() {
  const addTripBtn = document.getElementById('addTrip')
  addTripBtn.addEventListener('click', Trip.tripForm.bind(Trip))

  const allLocs = document.getElementById('allLocations')
  allLocs.addEventListener('click', Location.renderLocations.bind(Location))
}

// function clearPage() {
//
// }

eventListenersSetup()
Location.fetchLocations()
