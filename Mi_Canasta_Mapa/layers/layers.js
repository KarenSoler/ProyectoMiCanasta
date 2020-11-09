var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Localidades_1 = new ol.format.GeoJSON();
var features_Localidades_1 = format_Localidades_1.readFeatures(json_Localidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_1.addFeatures(features_Localidades_1);
var lyr_Localidades_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_1, 
                style: style_Localidades_1,
                interactive: true,
                title: '<img src="styles/legend/Localidades_1.png" /> Localidades'
            });
var format_UPZ_2 = new ol.format.GeoJSON();
var features_UPZ_2 = format_UPZ_2.readFeatures(json_UPZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPZ_2.addFeatures(features_UPZ_2);
var lyr_UPZ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPZ_2, 
                style: style_UPZ_2,
                interactive: true,
                title: '<img src="styles/legend/UPZ_2.png" /> UPZ'
            });
var format_Barrios_3 = new ol.format.GeoJSON();
var features_Barrios_3 = format_Barrios_3.readFeatures(json_Barrios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_3.addFeatures(features_Barrios_3);
var lyr_Barrios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barrios_3, 
                style: style_Barrios_3,
                interactive: true,
                title: '<img src="styles/legend/Barrios_3.png" /> Barrios'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Localidades_1.setVisible(true);lyr_UPZ_2.setVisible(true);lyr_Barrios_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Localidades_1,lyr_UPZ_2,lyr_Barrios_3];
lyr_Localidades_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'CODIGO_LOC': 'CODIGO_LOC', });
lyr_UPZ_2.set('fieldAliases', {'NUMERO': 'NUMERO', 'NOMBRE': 'NOMBRE', 'DESC_TIPO': 'DESC_TIPO', 'LOCALIDAD': 'LOCALIDAD', 'ESTRATOS': 'ESTRATOS', });
lyr_Barrios_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMB_BARRI': 'NOMB_BARRI', 'BAR_COD': 'BAR_COD', });
lyr_Localidades_1.set('fieldImages', {'OBJECTID': 'Range', 'NOMBRE': 'TextEdit', 'CODIGO_LOC': 'TextEdit', });
lyr_UPZ_2.set('fieldImages', {'NUMERO': 'Range', 'NOMBRE': 'TextEdit', 'DESC_TIPO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'ESTRATOS': 'TextEdit', });
lyr_Barrios_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMB_BARRI': 'TextEdit', 'BAR_COD': 'TextEdit', });
lyr_Localidades_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'CODIGO_LOC': 'no label', });
lyr_UPZ_2.set('fieldLabels', {'NUMERO': 'no label', 'NOMBRE': 'no label', 'DESC_TIPO': 'no label', 'LOCALIDAD': 'no label', 'ESTRATOS': 'no label', });
lyr_Barrios_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMB_BARRI': 'no label', 'BAR_COD': 'no label', });
lyr_Barrios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});