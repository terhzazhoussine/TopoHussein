var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MH_1 = new ol.format.GeoJSON();
var features_MH_1 = format_MH_1.readFeatures(json_MH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MH_1.addFeatures(features_MH_1);
var lyr_MH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MH_1, 
                style: style_MH_1,
                popuplayertitle: 'MH',
                interactive: true,
                title: '<img src="styles/legend/MH_1.png" /> MH'
            });
var format_reference_2 = new ol.format.GeoJSON();
var features_reference_2 = format_reference_2.readFeatures(json_reference_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reference_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reference_2.addFeatures(features_reference_2);
var lyr_reference_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reference_2, 
                style: style_reference_2,
                popuplayertitle: 'reference',
                interactive: true,
                title: '<img src="styles/legend/reference_2.png" /> reference'
            });
var format_trqjet_3 = new ol.format.GeoJSON();
var features_trqjet_3 = format_trqjet_3.readFeatures(json_trqjet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trqjet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trqjet_3.addFeatures(features_trqjet_3);
var lyr_trqjet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trqjet_3, 
                style: style_trqjet_3,
                popuplayertitle: 'trqjet',
                interactive: true,
                title: '<img src="styles/legend/trqjet_3.png" /> trqjet'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MH_1.setVisible(true);lyr_reference_2.setVisible(true);lyr_trqjet_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MH_1,lyr_reference_2,lyr_trqjet_3];
lyr_MH_1.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'SURFACE': 'SURFACE', 'INFO': 'INFO', });
lyr_reference_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'x': 'x', 'y': 'y', 'info': 'info', });
lyr_trqjet_3.set('fieldAliases', {'id': 'id', 'long': 'long', 'duree': 'duree', });
lyr_MH_1.set('fieldImages', {'id': '', 'NOM': '', 'SURFACE': '', 'INFO': '', });
lyr_reference_2.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'info': 'TextEdit', });
lyr_trqjet_3.set('fieldImages', {'id': 'TextEdit', 'long': 'TextEdit', 'duree': 'TextEdit', });
lyr_MH_1.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', 'SURFACE': 'no label', 'INFO': 'no label', });
lyr_reference_2.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'x': 'no label', 'y': 'no label', 'info': 'no label', });
lyr_trqjet_3.set('fieldLabels', {'id': 'no label', 'long': 'no label', 'duree': 'no label', });
lyr_trqjet_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});