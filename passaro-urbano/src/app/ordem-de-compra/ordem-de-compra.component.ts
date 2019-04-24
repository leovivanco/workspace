import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-de-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss'],
  providers: [OrdemCompraService]
})
export class OrdemDeCompraComponent implements OnInit {
  endereco: string = ''
  numero: string = ''
  complemento: string = ''
  opcaoPagamento: string = ''

  enderecoIsValid: boolean;
  numeroIsValid: boolean;
  complementoIsValid: boolean;
  opcaoPagamentoIsValid: boolean;



  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    this.ordemCompraService.hello()
  }

  updateEndereco(value: string) {
    this.endereco = value;
    if (this.endereco.length > 3) {
      this.enderecoIsValid = true
    }else{
      this.enderecoIsValid = false;
    }
  }
  updateNumero(value: string): void {
    this.numero = value;
    if (this.numero.length > -1) {
      this.numeroIsValid = true
    } else {
      this.numeroIsValid = false
    }


  }
  updateComplemento(value: string): void {
    this.complemento = value;
    if (this.complemento.length > 1) {
      this.complementoIsValid = true;
    } else {
      this.complementoIsValid = false;
    }

  }
  updateOpcaoPagamento(value: string): void {
    this.opcaoPagamento = value;
    if (this.opcaoPagamento.length > -1 && this.opcaoPagamento !== '') {
      this.opcaoPagamentoIsValid = true;
    } else {
      this.opcaoPagamentoIsValid = false;
    }

  }

}
