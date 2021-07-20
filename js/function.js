window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-23.550520,-46.633308),
			scroolWheel:true,
			zoom:12,
			mapTypeId: 'roadmap' /*google.maps.MapTypeId.ROADMAP*/
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat, 'lng': long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffeset: new google.maps.Size(0,20)
		});

		/*if(click == true){
			google.maps.event.addListener(marker,'click',function(){
			});
		}else(click == false){
			infoWindow.open(map,marker);
		}*/
	}

	initialize();

	var conteudo = '<p style = "color:black; text-align: left; font-style: bold; font-size: 14px; padding: 10px 0;"> Mercado Municipal de São Paulo</br>R. Cantareira, 306 - Centro Histórico de São Paulo São Paulo - SP 01024-900 Brasil</p>'
	addMarker(-23.541819,-46.629387,'', conteudo,true);
}