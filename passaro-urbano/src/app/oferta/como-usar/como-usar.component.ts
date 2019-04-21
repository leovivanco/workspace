import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';

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
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertasService.getComoUsarById(params.id)
        .then((comoUsar: string) => this.comoUsar = comoUsar)
        .catch((error: any) => console.log(error))
    })
  }

}
