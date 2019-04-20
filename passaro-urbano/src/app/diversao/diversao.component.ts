import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss']
})
export class DiversaoComponent implements OnInit {
  ofertas: Oferta[];
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('diversao')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
  }

}
