
$(document).ready(function(){

	var map = L.map("map").setView([40.2838, -3.8215], 16);
	 
	 
	console.log(map) 
	 
	L.tileLayer(' http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png').addTo(map);
	
	
	L.marker([40.2838, -3.8215]).addTo(map)
    .bindPopup('Estamos aqui')
    .openPopup();

});
