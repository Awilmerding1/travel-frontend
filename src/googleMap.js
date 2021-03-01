class GoogleMap {

  constructor(lat, long) {
    this.lat = lat
    this.long = long
  }

  initMap(locations) {
      map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: this.lat, lng: this.long },
      zoom: 8,
    });
    return map
    // initMarkers(map, locations)
  }

  initMarkers(loc) {
      new google.maps.Marker({
        position: { lat: parseFloat(loc.lat), lng: parseFloat(loc.long) },
        map: map
    })
  }


}
