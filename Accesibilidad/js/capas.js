var canton=new ol.layer.Tile({
  source: new ol.source.TileWMS({
	projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_CANTONAL'
	}
  })
});
var distrito=new ol.layer.Tile({
  source: new ol.source.TileWMS({
	projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_DISTRITAL'
	}
  })
});
var calles=new ol.layer.Tile({
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:calles4'
	},
  })
});

var predios=new ol.layer.Tile({
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326',
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:PREDIOS_CRTM05'
	},
  })
});

var map = new ol.Map({
target: 'map',
view: new ol.View({
  projection: 'EPSG:4326',
  center: [ -84.02171, 9.94246],
   //center: ol.proj.transform([9.94246,-84.02171 ], 'EPSG:4326', 'EPSG:5367'),
  zoom: 13
}),
layers : [canton,predios,calles]});

/*var map = new ol.Map({
controls: ol.control.defaults().extend([
  new ol.control.ScaleLine({
	units: 'm'
  })
]),
layers: layers,
target: 'map',
view: new ol.View({
  projection: 'EPSG:5367',
  center: [0, 0],
  zoom: 2
})
});*/
var a=canton.getSource().getProjection().getCode();
canton.setExtent();

alert (a);