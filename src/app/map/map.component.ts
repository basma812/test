import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: '<div id="map" style="width: 100%; height: 1600px;"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any; // Declare the map property

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    this.map = L.map('map').setView([54.005970, 10.728860], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
    const roadworksData = this.getRoadworksData();

    roadworksData.forEach((coord: any) => {
      const marker = L.marker([coord.lat, coord.lon]).addTo(this.map);
      marker.bindPopup(coord.popupContent || 'Default Popup Content').openPopup();
    });

    const bounds = L.latLngBounds(roadworksData.map((coord: any) => [coord.lat, coord.lon]));
    this.map.fitBounds(bounds, { padding: [10, 10] });
  }

  private getRoadworksData(): any[] {
    // Replace this with your method to fetch roadworks data from the service
    // For demonstration purposes, returning mock data
    return [
      { lat: 54.005970, lon: 10.728860, popupContent: 'Roadwork 1' },
      // Add more roadworks data as needed
    ];
  }
}
