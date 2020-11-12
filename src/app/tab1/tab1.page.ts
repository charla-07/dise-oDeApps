import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pictures: any[] = [
    {id: 1, url: '../assets/images/inicio1.jpg'},
    {id: 2, url: '../assets/images/inicio2.jpg'},
  ]
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.5,
    spaceBetween: 30 
  };
  
  purses: any[] = [
    {id: 1, url: '../assets/images/slider1.png'},
    {id: 2, url: '../assets/images/slider2.png'},
    {id: 3, url: '../assets/images/slider1.png'},
    {id: 4, url: '../assets/images/slider2.png'},
    {id: 5, url: '../assets/images/slider1.png'},
    {id: 6, url: '../assets/images/slider2.png'},
  ]

  pictures2: any[] = [
    {id: 1, url: '../assets/images/inicio3.jpg'},
    {id: 2, url: '../assets/images/inicio4.jpg'},
    {id: 3, url: '../assets/images/inicio5.jpg'},
    {id: 4, url: '../assets/images/inicio6.jpg'},
    {id: 5, url: '../assets/images/inicio7.jpg'},
    {id: 6, url: '../assets/images/inicio8.jpg'},
  ]

  purses2: any[] = [
    {id: 1, url: '../assets/images/slider.png'},
    {id: 2, url: '../assets/images/slider.png'},
    {id: 3, url: '../assets/images/slider.png'},
    {id: 4, url: '../assets/images/slider.png'},
    {id: 5, url: '../assets/images/slider.png'},
    {id: 6, url: '../assets/images/slider.png'},
  ]

  pictures3: any[] = [
    {id: 1, url: '../assets/images/inicio9.jpg'},
    {id: 2, url: '../assets/images/inicio10.jpg'},
    {id: 3, url: '../assets/images/inicio11.jpg'},
  ]
  constructor() {}

  
}
