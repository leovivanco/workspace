import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
catchError
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputSearch: string = '';
  subjectPesquisa: Subject<string> = new Subject<string>();
  ofertas: Observable<Oferta[]>;
  ofertasTemplate: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1100),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return of<Oferta[]>([])

        }
        return this.ofertasService.getSearch(term);
      }),
      catchError((error: any) => {
        console.log(error)
        return of<Oferta[]>([])
      })
    )
    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertasTemplate = ofertas)
  }

  getSearch(term:string){
    this.inputSearch = term;
    console.log(`Termo da busca ${term}`);
    this.subjectPesquisa.next(term);

  }
}
