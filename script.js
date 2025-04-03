window.onload = function() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
};


var map = L.map('map', {
  zoomControl: false,
  minZoom: 3
}).setView([53.980781, 14.769203], 16);

		// Base layers
		var baseLayers = {
			"OSM": L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
				maxZoom: 19,
				minZoom: 3,
			}).addTo(map),
			"Carto Light": L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
				maxZoom: 20,
				minZoom: 3,
			}),
			"OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 20,
				minZoom: 3,
			}),
			"Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
				maxZoom: 19,
				minZoom: 3,
			}),
			"GoogleSatellite": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
				maxZoom: 20,
				minZoom: 3,
				subdomains:['mt0','mt1','mt2','mt3']
			}),
			"Blanco": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
				maxZoom: 20,
				minZoom: 3,
			})
		};

    L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);


//------------------------------------------------------------------------------------------------------------

		
        function toggleBar() {
            const bar = document.getElementById("slideUpBar");
            bar.classList.toggle("show");
        }
		
			
		
//------------------------------------------------------------------------------------------------------------	
	
document.querySelectorAll('path').forEach(path => {
	path.addEventListener('click', function() {
		alert('Kliknięto na element!');
	});
});