import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})
export class ComoUsarComponent implements OnInit {
  comoUsar: string;
  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.parent.params['id'];
    this.ofertasService.getComoUsarById(id)
      .then((comoUsar: string) => this.comoUsar = comoUsar)
  }

}
