import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  logoImage: any;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.logoImage = this.appService.logoImage;
  }

}