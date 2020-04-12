import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
declare var ol: any;
@Component({
  selector: 'app-userwindow',
  templateUrl: './userwindow.component.html',
  styleUrls: ['./userwindow.component.css']
})
export class UserwindowComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private afStorage: AngularFireStorage) { }
  viewdata : any
  map:any
  gmapurl: any
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.viewdata = data.data;
      console.log(this.viewdata)
      const task = this.afStorage.ref('pictures/' + this.viewdata.Image).getDownloadURL()
        return task.subscribe(url => {
          if (url) {
            this.viewdata.address = url;
            console.log(this.viewdata)
          }
          this.gmapurl = `https://www.google.com/maps/search/?api=1&query=${this.viewdata.Location.F},${this.viewdata.Location.V}`
          console.log(this.gmapurl)
          this.setCenter(this.viewdata.Location.V,this.viewdata.Location.F);
          this.add_map_point(this.viewdata.Location.V,this.viewdata.Location.F);
        })
    });
    console.log(this.viewdata.Location.F)
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.viewdata.Location.V,this.viewdata.Location.F]),
        zoom: 8
      })
    });
    
    
  }
  setCenter(lat,lng) {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([lat,lng]));
    view.setZoom(10);
    // view.addMarker(ol.proj.fromLonLat([this.longitude, this.latitude]));
  }

  add_map_point(lat, lng) {
    console.log(lat,lng)
    var marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([lat,lng])
      ),
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

  };
}
