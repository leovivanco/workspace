import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
// import { Observable, interval, observable, Subject, pipe, Observer, Subscription } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { take } from 'rxjs/operators';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit, OnDestroy{
  oferta: Oferta;
  // private myInterval1: Subscription;
  // private myInterval2: Subscription;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }
  ngOnInit() {

    this.ofertasService.getOfertasById(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      });

    // this.route.params.subscribe(
    //   (params: any) => console.log(params),
    //   (erro: string) => console.log(erro),
    //   () => console.log('Conculuido'),

    // )
    // const numbers = interval(1000);

    // const takeFourNumbers = numbers.pipe(take(200));

    // this.myInterval1 = takeFourNumbers.subscribe(x => console.log('Next: ', x));

    // let meuObs = Observable.create((obs: Observer<Number>) => {
    //   obs.next(10),
    //   obs.next(1),
    //   obs.next(20),
    //   obs.next(330),
    //   obs.next(123),
    //   obs.complete()

    // })

    // this.myInterval2 = meuObs.subscribe(
    //   (result: any) => console.log(result + 10),
    //   (erro: any) => console.log(erro),
    //   (sucesso: any) => console.log(`${sucesso} Sucesso`)
    // )

  }
  ngOnDestroy() {
    // this.myInterval1.unsubscribe();
    // this.myInterval2.unsubscribe();
  }
}
