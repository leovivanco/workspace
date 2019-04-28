import { Pedido } from "./pedido.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, } from "rxjs";
import { URL_API } from "./app.api";
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }
  confirmarCompra(pedido: Pedido): Observable<number>{
    return this.http.post(
      `${URL_API}/pedidos`,
      pedido
    ).pipe(
      map((resposta: any) => resposta.id)
    );
  }
}
