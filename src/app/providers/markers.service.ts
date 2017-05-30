import { Injectable } from '@angular/core';

@Injectable()
export class MarkersService {

  constructor() { }


  getMarkers(){
    var markers = [];
    if (localStorage.getItem('markers') && (localStorage.getItem('markers') !== undefined)){
      markers = JSON.parse(localStorage.getItem('markers'));
    }

    return markers;    
  }

  newMarker(obj){
    var markers = [];
    if (localStorage.getItem('markers') && (localStorage.getItem('markers') !== undefined)){
      markers = JSON.parse(localStorage.getItem('markers'));
    }
    markers.push(obj);

    localStorage.setItem('markers', JSON.stringify(markers));

  }

  removeMarker(id){
    var markers = [];
    if (localStorage.getItem('markers') && (localStorage.getItem('markers') !== undefined)){
      markers = JSON.parse(localStorage.getItem('markers'));
    }

    markers.splice(id,1);

    localStorage.setItem('markers', JSON.stringify(markers));

  }

  updateMarker(lat : number, lng: number, i:any){
    var markers = [];
    if (localStorage.getItem('markers') && (localStorage.getItem('markers') !== undefined)){
      markers = JSON.parse(localStorage.getItem('markers'));
    }

    markers[i].lat = lat;
    markers[i].lng = lng;

    localStorage.setItem('markers', JSON.stringify(markers));

  }

}
