import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {
  ondeFica: string;
  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    let id = this.route.snapshot.parent.params['id'];
    this.ofertaService.getOndeFicaById(id)
      .then((ondeFica: string) => this.ondeFica = ondeFica)

  }

}
