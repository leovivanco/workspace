import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { URL_API } from './app.api';
import { Observable, interval } from 'rxjs';
import { map, retry, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) {

  }

  async getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`).toPromise()
      .then((resp: any) => resp)
  }
  async getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resp: any) => resp)
  }
  async getOfertasById(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resp: any) => resp[0])
  }

  async getComoUsarById(id: number) {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resp: any) => resp[0].descricao)
  }
  async getOndeFicaById(id: number) {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resp) => resp[0].descricao)
  }
  getSearch(term: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${term}`)
      .pipe(
        retry(10),
        map((resp: any ) => resp)
      )
  }
}
