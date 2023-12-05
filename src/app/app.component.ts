import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'test';
  constructor(private serviceService:ServiceService) {}
  ngOnInit(): void {
    this.test()
  }
   test() {
   this.serviceService.getRoadWorks("A1")
  }
}
