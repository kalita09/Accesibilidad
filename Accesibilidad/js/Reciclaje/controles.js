    /**
     * Definici�n de controles para el mapa de OpenLayers
     * 1
     * Los controles se agregan a un objeto panel que esta compuesto de botones html y estilos CSS
     * Los estilos del panel pueden ser modificados cambiando el archivo olStyleOverride.css
     * Pueden agregarse controles al panel creando un nuevo control de OpenLayers, es importante que cada control tenga los siguientes valores:
     *  title
     *  text
     *  icon
     * 
     * Para los �conos se est� usando la biblioteca FontAwesome http://fortawesome.github.io/Font-Awesome/ 
     */

     var zoomswitch = 0;
     var panel;
     var defaultUrl = "http://localhost:8080/geoserver/data/wms";

     var switcher = new OpenLayers.Control.LayerSwitcher({
        ascending:false,
        useLegendGraphics:true  
     });
    		
            

     var pan = new OpenLayers.Control.DragPan({
        title : "Arrastrar: Desplazamiento en el mapa arrastrando el mouse",
        text : "Arrastrar",
        icon : "fa-arrows"
     });

     var zoomBoxIn = new OpenLayers.Control.ZoomBox({
        title : "Acercar: Dibuje una caja en el mapa para acercar la vista",
        text : "Acercar",
        out : false,
        zoomOnClick : true,
        icon : "fa-plus"
     });

     var zoomBoxOut = new OpenLayers.Control.ZoomBox({
        title : "Acercar: Dibuje una caja en el mapa para alejar la vista",
        text : "Alejar",
        out : true,
        zoomOnClick : true,
        icon : "fa-minus"
     });

     var zoomToMax = new OpenLayers.Control.ZoomToMaxExtent({
        title : "Alejar la vista hasta la m�xima extensi�n",
        text : "Mundo",
        icon : "fa-globe"
     });

     var nav = new OpenLayers.Control.NavigationHistory({
        previousOptions : {
            title : "Ir al nivel de acercamiento previo",
            text : "Previo",
            icon : "fa-arrow-left"
        },
        nextOptions : {
            title : "Ir al nivel de acercamiento siguiente",
            text : "Siguiente",
            icon : "fa-arrow-right"
        },
        displayClass : "navHistory"
     });

    /**
     *  Funciones de HTML guia
     */

                
                // shows/hide the control panel
                function toggleControlPanel(event){
                    var toolbar = document.getElementById("toolbar");
                    if (toolbar.style.display == "none") {
                        toolbar.style.display = "block";
                    }
                    else {
                        toolbar.style.display = "none";
                    }
                    event.stopPropagation();
                    map.updateSize()
                }
                 
                function setWidth(size){
                    var mapDiv = document.getElementById('map');
                    var wrapper = document.getElementById('wrapper');

                    if (size == "auto") {
                        // reset back to the default value
                        mapDiv.style.width = null;
                        wrapper.style.width = null;
                    }
                    else {
                        mapDiv.style.width = size + "px";
                        wrapper.style.width = size + "px";
                    }
                    // notify OL that we changed the size of the map div
                    map.updateSize();
                }
                
                function setHeight(size){
                    var mapDiv = document.getElementById('map');

                    if (size == "auto") {
                        // reset back to the default value
                        mapDiv.style.height = null;
                    }
                    else {
                        mapDiv.style.height = size + "px";
                    }
                    // notify OL that we changed the size of the map div
                    map.updateSize();
                }
                
                function updateFilter(){
                    if(pureCoverage)
                        return;

                    var filterType = document.getElementById('filterType').value;
                    var filter = document.getElementById('filter').value;

                    // by default, reset all filters
                    var filterParams = {
                        filter: null,
                        cql_filter: null,
                        featureId: null
                    };
                    if (OpenLayers.String.trim(filter) != "") {
                        if (filterType == "cql") 
                            filterParams["cql_filter"] = filter;
                        if (filterType == "ogc") 
                            filterParams["filter"] = filter;
                        if (filterType == "fid") 
                            filterParams["featureId"] = filter;
                    }
                    // merge the new filter definitions
                    mergeNewParams(filterParams);
                }
                
                function resetFilter() {
                    if(pureCoverage)
                        return;

                    document.getElementById('filter').value = "";
                    updateFilter();
                }
                

    /**
     *  
     */
     function createPanel()
     {
        panel = new OpenLayers.Control.Panel({
            div : document.getElementById('toolbox'),
            defaultControl : pan,
            createControlMarkup : function(control) {
                var button = document.createElement('button'), iconSpan = document.createElement('span'), textSpan = document.createElement('span');
                iconSpan.className = "float-left fa " + control.icon + " fa-fw fa-lg";
                button.appendChild(iconSpan);
                if (control.text) {
                    textSpan.innerHTML = control.text;
                }
                button.appendChild(textSpan);
                return button;
            }
        });
        panel.addControls([pan, zoomBoxIn, zoomBoxOut, zoomToMax, nav.next, nav.previous]);
     }

    /**
     * Definici�n del administrador de capas o "Layer Switcher"
     * El layer switcher se compone de tres elementos: 
     *  switcherToggle: bot�n para desplegar/ocultar el layer switcher
     *  switcherBase: �rea para las capas base del mapa, permite seleccionar �nicamente una capa base
     *  switcherOver: �rea para las capas superpuestas del mapa, permite ocultar y desplegar cada capa, mostrat su simbolog�a, mostrar la capa en otra pesta�a y TODO: mostrar sus metadatos 
     */

    var switcherOn = false;     //indica si el layerSwitcher se debe mostrar, ver funci�n onclick del switcherToggle en createSwitcher() l�nea 133
    var switcher = null;        //contenedor externo del administrador de capas
    var switcherBase = null;    //contenedor interno de capas base
    var switcherOver = null;    //contenedor interno de capas superpuestas
    var switcherToggle = null;  //bot�n de encendido y apagado del administrador de capas

    /**
     * Crea el administrador de capas o LayerSwitcher y lo agrega al mapa
     * Es necesario que el mapa ya exista antes de llamar esta funci�n, por lo que debe invocarse al final del m�todo init() del script main.js 
     */
     function createSwitcher()
     {
        //Creaci�n de componentes 
        var mapDiv = document.getElementById("map"); 
        switcher = document.createElement("div");       //Contenedor externo
        switcherToggle = document.createElement("div"); //Bot�n de encendido/apagado    
        switcherBase = document.createElement("div");   //Contenedor interno de capas base
        switcherOver = document.createElement("div");   //Contenedor interno de capas superpuestas
        
        //Estilo de contenedores
        //La clase switcherOff del contenedor externo oculta el contenedor
        //La clase switcherOn del contenedor externo muestra el contenedor
        //Estas clases se intercambian por medio del evento onclic del bot�n de encendido y apagado 
        switcher.className = "layerSwitcher roundBorders switcherOff";
        switcherBase.className = "baseSwitcher roundBorders";
        switcherOver.className = "overSwitcher roundBorders";
        
        //Etiquetas de los contenedores internos
        var baseLabel = document.createElement("label");
        baseLabel.textContent = "Capas Base";
        baseLabel.className = "labelSwitcher";
        
        var overLabel = document.createElement("label");
        overLabel.textContent = "Capas Superpuestas";
        overLabel.className = "labelSwitcher";
        
        //Opciones del bot�n de encendido y apagado
        //El bot�n de encendido y apagado muestra el contenedor principal cuando la variable switcherOn tiene el valor true y muestra un �cono de "menos"
        //El bot�n de encendido y apagado oculta el contenedor principal cuando la variable switcherOn tiene el valor false y muestra un �cono de "menos"
        switcherToggle.className = "toggleSwitcher fa fa-2x fa-plus-square";
        switcherToggle.onclick = function()
        {
            //Si switcherOn es falso el contenedor est� oculto y debe mostrarse
            if(!switcherOn)
            {
                switcher.className = "layerSwitcher roundBorders switcherOn";           //la clase switcherOn muestra el contenedor principal
                switcherToggle.className = "toggleSwitcher fa fa-2x fa-minus-square";   //La clase fa-minus-square muestra un �cono de "menos" (-)
                switcherOn = true;
            }
            //Si switcherOff es verdadero el contenedor est� mostr�ndose y debe ocultarse
            else
            {
                switcher.className = "layerSwitcher roundBorders switcherOff";          //La clase switcherOff oculta el contenedor principal
                switcherToggle.className = "toggleSwitcher fa fa-2x fa-plus-square";    //La clase fa-plus-square muestra un �cono de "m�s" (+)
                switcherOn = false;
            }
        };
        
        //Todos los elementos se agregan al mapa en orden de jerarqu�a, empezando por el m�s externo hasta el m�s interno
        mapDiv.appendChild(switcher);
        mapDiv.appendChild(switcherToggle);
        switcher.appendChild(switcherBase);
        switcher.appendChild(switcherOver);
        switcherBase.appendChild(baseLabel);
        switcherOver.appendChild(overLabel);
    }

   /**
     * @param layers 
     */
     function addLayers(layers)
     {
        for(i = 0; i < layers.length; ++i)
        {
            addToMap(layers[i]);
        }
     }

    /**
     * @param layer  
     */
     function addToMap(layer)
     {
        //Elemento correspondiente a este layer en el nuevo LayerSwitcher
        var layerController = document.createElement("div");
        layerController.className = "layerController roundBorders";
        var checkbox = document.createElement("input");
        
        //Solo puede seleccionarse un layer base, por tanto el tipo de control para layers base debe ser un radio button
        if(layer.isBaseLayer)
        {
            checkbox.type = "radio";
            checkbox.name = "base";
            checkbox.checked = layer.visibility;
        }
        //Los layers normales deben tener la capacidad de superponerse, por tanto su control debe ser un checkbox que permita seleccion multiple
        else
        {
            checkbox.type = "checkbox";
            checkbox.name = "overlay";
            checkbox.checked = layer.visibility;
        }
        //El objeto con la informacion del layer debe almacenarse en el checkbox para futura operacion
        checkbox.olLayer = layer;
        //Etiqueta del elemento con el nombre del layer
        var label = document.createElement("span");
        label.textContent = layer.name;
        label.timeContainer = layer.name;
        label.className = "layerLabel";
        //Funcion de desplegar/ocultar segun el valor del checkbox
        //ademas configurar el zoom adecuado para la correcta visualizacion de la capa
        checkbox.onchange = function()
        {
               if(!this.olLayer.visibility){ 
                agr_bounds();//funcion para instanciar los bounds, de esta forma  se mantienen constantes
                        map.zoomToExtent(this.olLayer.BBOX.transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()), false);
                         var requestString = "http://" + createLegendRequest(this.olLayer);
            
            //TODO DEBUG document.getElementById("LOG").innerHTML = requestString;
            
            //Obtener la canva para dibujar la simbolog�a
            var canvas = document.getElementById("legend");
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            //El objeto imagen dibujar� la simbolog�a cuando se recupere la solicitud
            var img = new Image();
            img.onload = function(){ 
                context.drawImage(img,0,0);
            };
            img.src = requestString;
            $("#legend").css("display","block");
            }else{
                $("#legend").css("display","none");
            }
            this.olLayer.setVisibility(this.checked);     
        };
        
        //Control de zoom to layer
        /*el transformar los bounnds de las capas una tras otra vez daba como resulyado que la pagina colapsara
        pero al crear los bounds e la misma funcion, el problmema esta resuelto
        */
        var zoomToLayer = createLayerOperator(layer, "fa-expand", function(){
            if(this.olLayer.BBOX != undefined){
                //AL instanciar los bounds cada vez que se mande a llamar la funcion, los mantenemos constantes ante la transformacion de proyeccion
                var BBOX = new OpenLayers.Bounds(-85.95, 8.036, -82.559, 11.221);
                map.zoomToExtent(BBOX.transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()), false);
            }
        }, "Acercar a la capa");
        
        //Control para mostrar simbologia
        var showSymbology = createLayerOperator(layer, "fa-map-marker", function(){
            
            //Generaci�n de la solicitud para descargar la simbolog�a
            var requestString = "http://" + createLegendRequest(this.olLayer);
            
            //TODO DEBUG document.getElementById("LOG").innerHTML = requestString;
            
            //Obtener la canva para dibujar la simbolog�a
            var canvas = document.getElementById("legend");
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            //El objeto imagen dibujar� la simbolog�a cuando se recupere la solicitud
            var img = new Image();
            img.onload = function(){ 
                context.drawImage(img,0,0);
            };
            img.src = requestString;

        }, "Mostrar simbolog�a de la capa");
        
        //Control para mostrar metadatos
        var showMetadata = createLayerOperator(layer, "fa-info", function(){
            //TODO query metadata from layer
            window.open(this.olLayer.META);
        }, "Mostrar metadatos de a capa");
        
        //Control para mostrar capa en otra pesta�a
        var openLayer = createLayerOperator(layer, "fa-file-image-o", function(){
            var requestString = "http://" + createLayerRequest(this.olLayer);
            
            //TODO DEBUG document.getElementById("LOG").innerHTML = requestString;
            
            window.open(requestString,'_blank');
        }, "Mostrar capa en otra pesta�a");
        
        //Etiqueta y control para mostrar y ocultar la capa
        layerController.appendChild(checkbox);
        layerController.appendChild(label);
        if(layer.isBaseLayer)
        {
            //Las capas base no deben llevar los controles adicionales para cada capa
            switcherBase.appendChild(layerController);
        }
        else 
        {
            //Las capas extra deben llevar los controles para acercar a la capa, mostrar simbolog�a, mostrar metadatos y descargar imagen
            switcherOver.appendChild(layerController);
            layerController.appendChild(zoomToLayer);
            layerController.appendChild(showSymbology);
            layerController.appendChild(showMetadata);
            //layerController.appendChild(openLayer);
        }
        
        map.addLayer(layer);
    }

    /**
     * 
     * @param {Object} layer
     * @param {Object} icon
     * @param {Object} handler
     */
     function createLayerOperator(layer, icon, handler, tooltip)
     {
        var operator = document.createElement("div");
        operator.className = "layerOperator fa fa-lg " + icon;
        operator.olLayer = layer;
        operator.onclick = handler;
        operator.title = tooltip;
        return operator;
     }

    /**
     * 
     * @param {Object} layer
     */
     function createLayerRequest(layer)
     {
        var bbox = layer.BBOX;
        var bboxStr = "" + bbox.left + "," + bbox.bottom + "," + bbox.right + "," + bbox.top;
        var ratio = (bbox.top - bbox.bottom)/(bbox.right - bbox.left);
        var request = defaultUrl + "?" + 
        "VERSION=" + layer.params.VERSION + "&" + 
        "REQUEST=GetMap&" +
        "SERVICE=" + layer.params.SERVICE + "&" + 
        "LAYERS=" + layer.params.LAYERS + "&" + 
        "BBOX=" + bboxStr + "&" + 
        "WIDTH=" + 1024 + "&" + 
        "HEIGHT=" + Math.round(1024*ratio) + "&" +
        "EPSG=4326&" + 
        "FORMAT=image/png&" + 
        "TRANSPARENT=TRUE";
        return request;
     }

    /**
     * 
     * @param {Object} layer
     */
     function createLegendRequest(layer)
     {
        var request = defaultUrl + "?" + 
        "REQUEST=GetLegendGraphic&" + 
        "VERSION=" + layer.params.VERSION + "&" + 
        "FORMAT=image/png&" +
        "WIDTH=15&HEIGHT=15&" +
        "LAYER=" + layer.params.LAYERS;
        return request;
     }



