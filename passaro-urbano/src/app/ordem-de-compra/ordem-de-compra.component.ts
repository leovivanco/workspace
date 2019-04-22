import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-de-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss']
})
export class OrdemDeCompraComponent implements OnInit {
  endereco: string = ''
  numero: string = ''
  complemento: string = ''
  opcaoPagamento: string = ''

  constructor() { }

  ngOnInit() {
  }

  updateEndereco(value: string) {
    this.endereco = value;
    console.log(this.endereco)

  }
  updateNumnero(value: string): void {
    this.numero = value;

  }
  updateComplemento(value: string): void {
    this.complemento = value;
  }
  updateOpcaoPagamento(value: string): void {
    this.opcaoPagamento = value;
    console.log(this.opcaoPagamento)

  }

}
