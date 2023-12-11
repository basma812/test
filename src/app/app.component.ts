import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

declare var L: any; // Declare Leaflet to avoid TypeScript errors

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  private map: any; // Declare a variable to hold the Leaflet map instance

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.initializeMap(); // Call the method to initialize the map
    this.test();
  }

  private initializeMap(): void {
    console.log('Map initialized'); // Log statement
    this.map = L.map('map').setView([54.005970, 10.728860], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  test() {
    // Example coordinates, replace these with your specific coordinates
    const specificCoordinates = [{ lat: 54.005970, lon: 10.728860, popupContent: 'Marker A1' }];
  
    // Assuming specificCoordinates is an array of objects with lat, lon, and popupContent properties
    specificCoordinates.forEach((coord: any) => {
      const marker = L.marker([coord.lat, coord.lon]).addTo(this.map);
  
      // Add a popup with customizable content
      marker.bindPopup(coord.popupContent || 'Default Popup Content').openPopup();
    });
  
    // Optionally, you can fit the map to the bounds of the markers
    const bounds = L.latLngBounds(specificCoordinates.map((coord: any) => [coord.lat, coord.lon]));
    this.map.fitBounds(bounds, { padding: [10, 10] });
  }

}
