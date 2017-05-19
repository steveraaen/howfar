var React = require('react');
var Map = require('react-d3-map').Map;
var MarkerGroup = require('react-d3-map').MarkerGroup;

var width = 700;
var height = 700;
// zoom scale
var scale = 1200 * 5;
//  zoom scale min and max
var scaleExtent = [1 << 12, 1 << 13]
var center = [122, 23.5];
var popupContent = function(d) { return d.properties.text; }

var Maps = React.createClass({

	render: function() {
		return (
  <Map
    width= {width}
    height= {height}
    scale= {scale}
    scaleExtent= {scaleExtent}
    center= {center}
  >
    <MarkerGroup
      key= {"polygon-test"}
      data= {data}
      popupContent= {popupContent}
      markerClass= {"your-marker-css-class"}
    />
  </Map>
		)
	}
});

module.exports = Map

