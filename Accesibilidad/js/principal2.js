var map;
var untiled; //borrar
var tiled;   //borrar
var pureCoverage = false;
var bounds = new OpenLayers.Bounds(
    492797.17567969585, 1097123.678648543,
    504760.0930796958, 1101094.227048543
);

 var options = {
    controls: [],
    maxExtent: bounds,
    maxResolution: 46.73014609374991,
    projection: "EPSG:5367",
    units: 'm'
};

// pink tile avoidance
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;
// make OL compute scale according to WMS spec
OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;

            function init(){
                // if this is just a coverage or a group of them, disable a few items,
                // and default to jpeg format
                format = 'image/png';
                if(pureCoverage) {
                    document.getElementById('filterType').disabled = true;
                    document.getElementById('filter').disabled = true;
                    document.getElementById('antialiasSelector').disabled = true;
                    document.getElementById('updateFilterButton').disabled = true;
                    document.getElementById('resetFilterButton').disabled = true;
                    document.getElementById('jpeg').selected = true;
                    format = "image/jpeg";
                }
            
                map = new OpenLayers.Map('map', {
				controls:[
					new OpenLayers.Control.Navigation(),
				    new OpenLayers.Control.ArgParser(),
		            new OpenLayers.Control.Attribution(),
		            new OpenLayers.Control.PanZoomBar({panIcons:false}),
			        new OpenLayers.Control.TouchNavigation({ //Soporte para móbiles
					dragPanOptions : {
						interval : 0, // non-zero kills performance on some mobile phones
						enableKinetic : true
					}})
				]	
				}, options);

///CONTROLS
	createPanel();
	map.addControl(nav);
	map.addControl(panel);
	createSwitcher();

 // build up all controls
    map.addControl(new OpenLayers.Control.PanZoomBar({position: new OpenLayers.Pixel(2, 15)}));
    map.addControl(new OpenLayers.Control.Navigation());//**************
    map.addControl(new OpenLayers.Control.Scale($('scale')));//*********
    map.addControl(new OpenLayers.Control.MousePosition({element: $('location')}));//*********
    map.zoomToExtent(bounds);
            
                // setup tiled layer
                tiled = new OpenLayers.Layer.WMS(
                    "Accesibilidad:LIMITE_CANTONAL - Tiled", "http://localhost:8080/geoserver/Accesibilidad/wms",
                    {
                        LAYERS: 'Accesibilidad:LIMITE_CANTONAL',
                        STYLES: '',
                        format: format
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: true,
                        yx : {'EPSG:5367' : true}
                    } 
                );
            
                // setup single tiled layer
                untiled = new OpenLayers.Layer.WMS(
                    "Accesibilidad:LIMITE_CANTONAL - Untiled", "http://localhost:8080/geoserver/Accesibilidad/wms",
                    {
                        LAYERS: 'Accesibilidad:LIMITE_CANTONAL',
                        STYLES: '',
                        format: format
                    },
                    {
                       singleTile: true, 
                       ratio: 1, 
                       isBaseLayer: true,
                       yx : {'EPSG:5367' : true}
                    } 
                );
        
                map.addLayers([untiled, tiled]);

               
                
	// wire up the option button
	var options = document.getElementById("options");
	options.onclick = toggleControlPanel;
	
	// support GetFeatureInfo
	map.events.register('click', map, function (e) {
		document.getElementById('nodelist').innerHTML = "Loading... please wait...";
		var params = {
			REQUEST: "GetFeatureInfo",
			EXCEPTIONS: "application/vnd.ogc.se_xml",
			BBOX: map.getExtent().toBBOX(),
			SERVICE: "WMS",
			INFO_FORMAT: 'text/html',
			QUERY_LAYERS: map.layers[0].params.LAYERS,
			FEATURE_COUNT: 50,
			"Layers": 'Accesibilidad:LIMITE_CANTONAL',
			WIDTH: map.size.w,
			HEIGHT: map.size.h,
			format: format,
			styles: map.layers[0].params.STYLES,
			srs: map.layers[0].params.SRS};
		
		// handle the wms 1.3 vs wms 1.1 madness
		if(map.layers[0].params.VERSION == "1.3.0") {
			params.version = "1.3.0";
			params.j = parseInt(e.xy.x);
			params.i = parseInt(e.xy.y);
		} else {
			params.version = "1.1.1";
			params.x = parseInt(e.xy.x);
			params.y = parseInt(e.xy.y);
		}
			
		// merge filters
		if(map.layers[0].params.CQL_FILTER != null) {
			params.cql_filter = map.layers[0].params.CQL_FILTER;
		} 
		if(map.layers[0].params.FILTER != null) {
			params.filter = map.layers[0].params.FILTER;
		}
		if(map.layers[0].params.FEATUREID) {
			params.featureid = map.layers[0].params.FEATUREID;
		}
		OpenLayers.loadURL("http://localhost:8080/geoserver/Accesibilidad/wms", params, this, setHTML, setHTML);
		OpenLayers.Event.stop(e);
	});
}