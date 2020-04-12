import { Component, OnInit } from '@angular/core';
declare var ol: any;
@Component({
  selector: 'app-userright',
  templateUrl: './userright.component.html',
  styleUrls: ['./userright.component.css']
})
export class UserrightComponent implements OnInit {
  ol : any
  constructor() { }
  latitude = 30.342223;
  longitude = 76.8285229;
  map : any
  ngOnInit() {
  this.map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([73.8567, 18.5204]),
      zoom: 8
    })
  });
  
  this.setCenter();
  this.add_map_point(this.longitude, this.latitude);
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(10);
    // view.addMarker(ol.proj.fromLonLat([this.longitude, this.latitude]));
  }

  add_map_point(lat, lng) {

    var marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([lat,lng])
      ),  // Cordinates of New York's Town Hall
    });
    marker.setStyle(new ol.style.Style({
      image: new ol.style.Icon(({
          crossOrigin: 'anonymous',
          src: '../../assets/images/map-pin.svg'
      }))
  }));
    var vectorSource = new ol.source.Vector({
      features: [marker]
    });
    var markerVectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });
    this.map.addLayer(markerVectorLayer);

  }

}
