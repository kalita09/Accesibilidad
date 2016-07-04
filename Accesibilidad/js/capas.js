var canton=new ol.layer.Tile({
	title: 'Canton',
  source: new ol.source.TileWMS({ 
	projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_CANTONAL'
	}
  })
});
var distrito=new ol.layer.Tile({
	title: 'Distrito',
  source: new ol.source.TileWMS({
	projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_DISTRITAL'
	}
  })
});
var calles=new ol.layer.Tile({
	title: 'Calles',
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:calles4'
	},
  })
});

var predios=new ol.layer.Tile({
	title: 'Predios',
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:PREDIOS_CRTM05'
	},
  })
});


var vista = new ol.View({
  projection: 'EPSG:4326',
  center: [ -84.02171, 9.94246],
  zoom: 13,
  minZoom: 13
  //maxZoom:13 //pueda acercar lo que desee
});
var map = new ol.Map({

target: 'map',
view: vista,

layers : [new ol.layer.Group({'title': 'Mapa visualizado',
						layers: [
							canton,distrito,predios,calles
						]
			 })]				 


}



);



 var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
    });
    map.addControl(layerSwitcher);
	layerSwitcher.showPanel();

var a=canton.getSource().getProjection().getCode();
canton.setExtent();
//alert(vista.getZoom());

