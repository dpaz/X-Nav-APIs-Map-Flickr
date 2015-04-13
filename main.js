
var map;

function chooseAddr(lat, lng) {

		var location = new L.LatLng(lat, lng);
		map.panTo(location);

		
		$('#results').html("");
		
		addCarrousel();
		
}	


function addCarrousel(){

	tag = $('#search input').val();
	console.log(tag)
	$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?&tagmode="+tag+"&format=json&jsoncallback=?",function(data){
		$.each(data.items, function(i,elem){
			html= "<img src="+elem.media.m+">";
			$("#imagenes").append(html);
		});
	});
}


$(document).ready(function(){

	function onEachFeature(feature, layer) {
   
	    if (feature.properties && feature.properties.Name) {
	        layer.bindPopup(feature.properties.Name);
	    }
	};
	

	map = L.map("map").setView([51.507222,-0.1275], 16);	
	  
	L.tileLayer(' http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png').addTo(map);
	
	

	
	
	
	$("#boton").click(function(){
		var texto = $("#search input").val();
		texto2 = texto.replace(" ","%");
		$.getJSON("http://nominatim.openstreetmap.org/search/"+texto2+"?format=json&limit=5",function(data){
				var items = [];
					$.each(data, function(key, val) {
						items.push("<li><a href='#'"+"onclick='chooseAddr(" +val.lat + ", " + val.lon +");return false;'>" + val.display_name +'</a></li>');
				});
				
				
				$('#results').empty();
				if (items.length != 0) {
				  $('<p>', { html: "Search results:" }).appendTo('#results');
				  $('<ul/>', {
				    'class': 'my-new-list',
				    html: items.join('')
				  }).appendTo('#results');
				} else {
				  $('<p>', { html: "No results found" }).appendTo('#results');
				}
		});
	});
	
	

});



/*
html= '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
		html += '<div class="carousel-inner" role="listbox">'

		$.each(data.items, function(i,elem){
			html += '<div class="item active">'
				html += '<img src="'+elem.media+'" alt="Slide '+i+'">'
			html += '</div>'			
		});
		html += '</div></div>';
		$('#imagenes').append(html);
		$('#search input').val("");

*/

