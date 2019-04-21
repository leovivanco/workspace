import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {
  ofertas: Oferta[];
  dataTest: any = new Date(2019, 5, 15)
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('restaurante')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
