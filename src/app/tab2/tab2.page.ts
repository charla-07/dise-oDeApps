import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  departments: any[] = [
    {id: 1, name: "Mujer"},
    {id: 2, name: "Hombre"},
    {id: 3, name: "Bebés 0-24 meses"},
    {id: 4, name: "Niños y Niñas"},
    {id: 5, name: "Zapatos"},
    {id: 6, name: "Belleza"},
    {id: 7, name: "Relojes, Lentes y Joyeria"},
    {id: 8, name: "Deportes"},
    {id: 9, name: "Computo y electrónica"},
    {id: 10, name: "Celulares"},
    {id: 11, name: "Videojuegos"},
    {id: 12, name: "Jugetes"},
    {id: 13, name: "Línea Blanca"},
    {id: 14, name: "Muebles"},
    {id: 15, name: "Cocina"},
    {id: 16, name: "Viajes"},
    {id: 17, name: "Casa"},
    {id: 18, name: "Vinos y Gourmet"},
    {id: 19, name: "Hallowen y Navidad"},
    {id: 20, name: "Otras Categorías"}
  ]
  constructor() {}

}
