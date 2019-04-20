import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ofertas: Array<Oferta>;

  ngOnInit() {
    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      }).catch((msg: any) => console.log(msg))
  }

}
