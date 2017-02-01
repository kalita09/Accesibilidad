/*Este archivo es el encargado de manejar correctamente la visualizacion de las capas utilizando 
*openlayer 3 

*/
/*Declaracion de la capa de canton, se indica la direccion del shapefile correspondiente en geoserver*/
var canton=new ol.layer.Tile({
	title: 'Canton',   /*Nombre de la leyenda en el layerswitcher*/
  source: new ol.source.TileWMS({ 
	projection: 'EPSG:4326', /*Numero de proyeccion*/
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_CANTONAL' /*Nombre del shapefile*/
	}
  })
});

/*Declaracion de la capa de distrito, se indica la direccion del shapefile correspondiente en geoserver*/
var distrito=new ol.layer.Tile({
	title: 'Distrito', /*Nombre de la leyenda en el layerswitcher*/
  source: new ol.source.TileWMS({
	projection: 'EPSG:4326', /*Numero de proyeccion*/
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	params: {
	  "LAYERS": 'Accesibilidad:LIMITE_DISTRITAL' /*Nombre del shapefile*/
	}
  })
});

/*Declaracion de la capa de calles, se indica la direccion del shapefile correspondiente en geoserver*/
var calles=new ol.layer.Tile({
	title: 'Calles', /*Nombre de la leyenda en el layerswitcher*/
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326', /*Numero de proyeccion*/
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:calles4' /*Nombre del shapefile*/
	},
  })
});

/*Declaracion de la capa de predios, se indica la direccion del shapefile correspondiente en geoserver*/
var predios=new ol.layer.Tile({
	title: 'Predios', /*Nombre de la leyenda en el layerswitcher*/
  source: new ol.source.TileWMS({
  projection: 'EPSG:4326', /*Numero de proyeccion*/
	url: 'http://localhost:8080/geoserver/Accesibilidad/wms',
	
	params: {
	  "LAYERS": 'Accesibilidad:PREDIOS_CRTM05' /*Nombre del shapefile*/
	},
  })
});

/*Declaracion de la vista (ventana) */
var vista = new ol.View({
  projection: 'EPSG:4326',
  center: [ -84.02171, 9.94246],
  zoom: 13,
  minZoom: 13
  //maxZoom:13 //pueda acercar lo que desee
});

/*Declaracion del mapa para la superposicion(overlap) de las capas para mostrarse en la vista*/
var map = new ol.Map({

target: 'map',
view: vista,

/*capas participantes de la visualizacion*/
layers : [new ol.layer.Group({'title': 'Mapa visualizado',
						layers: [
							canton,distrito,predios,calles
						]
			 })]				 
}
);

/*Declaracion de leyenda tipo checkbox para seleccionar entre las distintas capas*/
 var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Etiqueta opcional para el boton
    });
    map.addControl(layerSwitcher);
	layerSwitcher.showPanel();

var a=canton.getSource().getProjection().getCode();
canton.setExtent();
