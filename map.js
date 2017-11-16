// Provide access token
mapboxgl.accessToken = 'pk.eyJ1IjoibHpjYW11dGkiLCJhIjoiY2o3a281dWJvMHE4ajMzbGF4enJyNHRiciJ9.DhYjvPk5E_wJvys5DU5v2A';  // replace with your own access token

// Link to a mapbox studio style
var map = new mapboxgl.Map({
	container: 'map',
	minZoom: 9,
	maxZoom: 18,
	style: 'mapbox://styles/lzcamuti/cj8ynio1pi4vq2rpqzlze1s4d' 
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// code to add interactivity once map loads
// ANDI START HERE //

map.on('load', function() { // the event listener that does some code after the map loads
    
    // TIMELINE SLIDER
    map.addLayer({
    id: 'combinedvacantg',
    type: 'fill',
    source: {
      type: 'geojson',
      data: 'data/combinedvacantg.geojson' // replace this with the url of your own geojson
    },
    'paint': {
    'fill-color': 'rgba(204, 133, 166, 0.9)',
    },
    filter: ['==', 'Year', 2008]
    });

    document.getElementById('slider').addEventListener('input', function(e) {
      // get the current hour as a integer
      var year = parseInt(e.target.value);
      // map.setFilter(layer-name, filter)
      map.setFilter('combinedvacantg', ['==', 'Year', year]);
      document.getElementById('year-label').innerText = year
    });

    
$("#slider").on('input',function(e) {
    var year = e.target.value;
    var barClass = ".bar.y" + year;

    var bar = $(barClass);
    
    bar.toggle();
})

// FINISH TIMELINE SLIDER //


    // the categories we created from the cville-parks map layer
    var layers = [
        'Vacant Industrial Land', 
        'Vacant Residential Land', 
        'Historic Vegetation Outline', 
    ];
    
    // the colors we chose to style the parks on the map for each category
    var colors = [
        '#E1ADCF', 
        '#E594BA', 
        '#000000', 
    ];

    // add a legend to the map
    for (i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var color = colors[i];
      var item = document.createElement('div');
      var key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

      var value = document.createElement('span');
      value.innerHTML = layer;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }

var toggleableLayerIds = [ 'Topography' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);

var toggleableLayerIds = [ 'Buildings' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
var toggleableLayerIds = [ 'Woods' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

var toggleableLayerIds = [ 'Grassland' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

var toggleableLayerIds = [ 'Historic Vegetation' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

var toggleableLayerIds = [ 'Parks' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);


// POP-UPS


map.on('click', function(e) {
      var stops = map.queryRenderedFeatures(e.fill, {
        layers: ['combinedvacantg'] // replace this with the name of the layer
      });

      // if the layer is empty, this if statement will return NULL, exiting the function (no popups created) -- this is a failsafe to avoid endless loops
      if (!stops.length) {
        return;
      }

      // Sets the current feature equal to the clicked-on feature using array notation, in which the first item in the array is selected using arrayName[0]. The event listener above ("var stops = map...") returns an array of clicked-on bus stops, and even though the array might only have one item, we need to isolate it by using array notation as follows below.
      var stop = stops[0];
      
      // Popup body text 
      var popupBody = stop.properties.Notes;
      if (popupBody == "null") { 
        console.log("it's null!"); 
          popupBody = ""; 
        } else {
          console.log(stop.properties.Notes);
        }

      // Initiate the popup
      var popup = new mapboxgl.Popup({ 
        closeButton: true, // If true, a close button will appear in the top right corner of the popup. Default = true
        closeOnClick: true, // If true, the popup will automatically close if the user clicks anywhere on the map. Default = true
        anchor: 'bottom', // The popup's location relative to the feature. Options are 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left' and 'bottom-right'. If not set, the popup's location will be set dynamically to make sure it is always visible in the map container.
        offset: [0, -15] // A pixel offset from the centerpoint of the feature. Can be a single number, an [x,y] coordinate, or an object of [x,y] coordinates specifying an offset for each of the different anchor options (e.g. 'top' and 'bottom'). Negative numbers indicate left and up.
      });

      // Set the popup location based on each feature
      popup.setLngLat(e.lngLat);

      // Set the contents of the popup window
      popup.setHTML('<h3>' + stop.properties.LOCNUM + " " + stop.properties.LOCSTREET // 'stop_id' field of the dataset will become the title of the popup
                           + '</h3><p>'+ popupBody // 'stop_name' field of the dataset will become the body of the popup
                           + '</p>');

      // Add the popup to the map
      popup.addTo(map);  // replace "map" with the name of the variable in line 28, if different
    });

};

   // Show "About this Map" modal when clicking on button
$('#about').on('click', function() {

    $('#screen').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)

    $('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)                          
    
});

// Close "About this Map" modal when close button in modal is clicked
$('.modal .close-button').on('click', function() {

    $('#screen').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)

    $('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)                          
    
});
});
