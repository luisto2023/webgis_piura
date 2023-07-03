var map = L.map('map', {
    center: [ -5.197145, -80.626677],
    zoom: 14,
    minZoom: 8,
    maxZoom: 20,
    maxBounds: [[-6.8322,-82.7169], [-3.4625,-78.1808]]
    });

L.control.scale({
    imperial: false
 }).addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var piura = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:piura", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
piura.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:bancos", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:colegios", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
colegios.addTo(map);

var estacionamientos = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:estacionamientos", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
estacionamientos.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:farmacias", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:hoteles", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:mercados", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgispiura/wms?", {
layers: "webgispiura:restaurantes", 
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
restaurantes.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Base Satelite": googleSat,
    "Base Hybrid:":googleHybrid,
    "Base Terrain:": googleTerrain
     };
    
var overlayMaps = {
    "Departamento de Piura": piura,
    "Bancos": bancos,
    "Colegios": colegios,
    "Estacionamiento": estacionamientos,
    "Farmacias": farmacias,
    "Hoteles": hoteles,
    "Mercados": mercados,
    "Restaurantes": restaurantes,
    };

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);
