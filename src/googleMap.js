class GoogleMap {

  constructor(lat, long) {
    this.lat = lat
    this.long = long
  }

  initMap(lat, long) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: this.lat, lng: this.long },
      zoom: 8,
    });
  }

}
