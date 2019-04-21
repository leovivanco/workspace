import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit, OnDestroy {
  oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }
  ngOnInit() {

    this.route.params.subscribe((param: Params) => {
      this.ofertasService.getOfertasById(param.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
        });
    })

  }
  ngOnDestroy() {
    // this.myInterval1.unsubscribe();
    // this.myInterval2.unsubscribe();
  }
}
