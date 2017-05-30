import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MarkersService } from './providers/markers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkersService]
})
export class AppComponent {
  //Zoom level
  zoom: number = 10;
  //start position
  lat: number = -22.360525;
  lng: number = -47.379803;

  //Markers
  markers: marker[]; 
  // = [
  //   {
  //     name: 'Compsoft',
  //     lat: -22.360525,
  //     lng: -47.379803,
  //     draggable: true

  //   },
  //   {
  //     name: 'Company One',
  //     lat: 42.825588,
  //     lng: -71.018029,
  //     draggable: true    

  //   },
  //   {
  //     name: 'Company two',
  //     lat: 42.868164,
  //     lng: -70.889071,
  //     draggable: false

  //   }
  // ];

  constructor(private mrkService : MarkersService){
    this.markers = this.mrkService.getMarkers();
    console.log(this.markers);
    

  }

  clickedMarker(marker: marker, index: number){
    console.log('Clicked Marker:' + marker.name);
  }

  mapClicked($event:any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    // this.markers.push(newMarker);
    this.mrkService.newMarker(newMarker);
    this.markers = this.mrkService.getMarkers();
  }

  public onSubmit(form : NgForm): void {
    console.log(form.value);
    //this.markers.push(form.value);
    this.mrkService.newMarker(form.value);
    form.reset();
    this.markers = this.mrkService.getMarkers();
    
  }

  markerDragEnd(marker: any, $event: any, i : any){
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }    
    
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this.mrkService.updateMarker(newLat, newLng, i);
    this.markers = this.mrkService.getMarkers();

    // this.markers[i].lat = newLat; 
    // this.markers[i].lng = newLng;


  }

  deleteMarker(i){
    // this.markers.splice(i,1);
    this.mrkService.removeMarker(i);
    this.markers = this.mrkService.getMarkers();
    
    //
  }


}
//Marker Type
  interface marker{
    name?: string;
    lat: number;
    lng:number;
    draggable: boolean;
  }
