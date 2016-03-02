//Peticiones de Layers WMS
//var geoserver = "http://geovision.uned.ac.cr/geoserver";



//Peticiones de Layers WMS
//var geoserver = "http://geovision.uned.ac.cr/geoserver";

var Layers = {

	osm: new OpenLayers.Layer.OSM(
		"Costa Rica"
	),

	montesdeoca : new OpenLayers.Layer.WMS(
                "Montes de Oca",
                "http://geovision.uned.ac.cr/geoserver/accesibilidad/wms",
                {
                        LAYERS : 'accesibilidad:montesdeoca',
                        STYLES : '',
                        format : "image/png",
                        transparent : "true",
                },
                {
                        buffer : 0,
                        displayOutsideMaxExtent : true,
                        isBaseLayer : false,
                        visibility : false,
                }
        ),

	vias : new OpenLayers.Layer.WMS(
                "Vías",
                "http://geovision.uned.ac.cr/geoserver/accesibilidad/wms",
                {
                        LAYERS : 'accesibilidad:montesdeoca_',
                        STYLES : '',
                        format : "image/png",
                        transparent : "true",
                },
                {
                        buffer : 0,
                        displayOutsideMaxExtent : true,
                        isBaseLayer : false,
                        visibility : false,
                }
        ),

	urbano : new OpenLayers.Layer.WMS(
                "Zona urbana",
                "http://www.snitcr.go.cr/servicios/cartografia/wms?",
                {
                        LAYERS : 'cartografia:urbano_5000',
                        STYLES : '',
                        format : "image/png",
                        transparent : "true",
                },
                {
                        buffer : 0,
                        displayOutsideMaxExtent : true,
                        isBaseLayer : false,
                        visibility : false,
                }
        ),

};

//Asignar BBOX para cada layer
function agr_bounds(){

Layers.montesdeoca.BBOX = new OpenLayers.Bounds(-84.066, 9.922, -83.957, 9.958);
Layers.vias.BBOX = new OpenLayers.Bounds(-84.066, 9.922, -83.957, 9.958);
Layers.urbano.BBOX = new OpenLayers.Bounds(-84.066, 9.922, -83.957, 9.958);


};

Layers.montesdeoca.META = "http://geovision.uned.ac.cr/geonetwork/srv/spa/search#|899c30f5-5061-44df-aea6-04067c5c3dd1";
Layers.vias.META = "http://geovision.uned.ac.cr/geonetwork/";
Layers.urbano.META = "http://geovision.uned.ac.cr/geonetwork/";

var layers = [Layers.osm, Layers.montesdeoca, Layers.urbano, Layers.vias];

var box = new Array();
var nom_box = new Array();
var resp = new Array();
/*function boundss(){
nom_box[1] = "Arboles plantados";
box[1] = new OpenLayers.Bounds(-85.825, 10.094, -85.786, 10.187);
resp[1] = new OpenLayers.Bounds(-85.825, 10.094, -85.786, 10.187);
}*/
