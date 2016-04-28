function initMap() {
    var mapDiv = document.getElementById('map');
    var LatLng = {lat: 43.115767, lng: 12.388208};
    var map = new google.maps.Map(mapDiv, {
        center: LatLng,
        zoom: 17,
        scrollwheel: false,
        mapTypeControl: false,
        draggable: false,
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e9e9e9'
                    },
                    {
                        lightness: 17
                    }
                ]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5'
                    },
                    {
                        lightness: 20
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#ffffff'
                    },
                    {
                        lightness: 17
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#ffffff'
                    },
                    {
                        lightness: 29
                    },
                    {
                        weight: 0.2
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff'
                    },
                    {
                        lightness: 18
                    }
                ]
            },
            {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff'
                    },
                    {
                        lightness: 16
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5'
                    },
                    {
                        lightness: 21
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dedede'
                    },
                    {
                        lightness: 21
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        visibility: 'on'
                    },
                    {
                        color: '#ffffff'
                    },
                    {
                        lightness: 16
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        saturation: 36
                    },
                    {
                        color: '#333333'
                    },
                    {
                        lightness: 40
                    }
                ]
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f2f2f2'
                    },
                    {
                        lightness: 19
                    }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#fefefe'
                    },
                    {
                        lightness: 20
                    }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#fefefe'
                    },
                    {
                        lightness: 17
                    },
                    {
                        weight: 1.2
                    }
                ]
            }
        ]
    });

    var iconMarker = '/static/images/marker.png';
    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon: iconMarker
    });
}
