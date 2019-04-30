import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../pedido.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') form: NgForm;
  idPedido: number;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  onSubmit(): void{
    let pedido: Pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.pagamento
    )
    this.ordemCompraService.confirmarCompra(pedido)
      .subscribe((idPedido) => this.idPedido = idPedido )
  }

}
