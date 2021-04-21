import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class AppService {
    logoImage;
    constructor() {
        this.loadImages();
    }

    loadImages() {
        // this.logoImage = require('/assets/Logos/headerlogo.png').default;
        this.logoImage = '';
    }

}