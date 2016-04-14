function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 43.115767, lng: 12.388208},
        zoom: 17
    });
}
