import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss'],
  providers: [OrdemCompraService, CarrinhoService]
})
export class OrdemCompraComponent implements OnInit {

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }
  idPedido: number;
  //form.get('endereco').valid && formulario.get(endereco)
  form: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
    'complemento': new FormControl(null),
    'pagamento': new FormControl(null, [Validators.required])
  })

  ngOnInit(){
    console.log(this.carrinhoService.exibiItensCarrrinho(), 'Clg')
  }
  confirmarPagamento():void{
    if (this.form.status === "INVALID") {
      this.form.get('endereco').markAsTouched()
      this.form.get('numero').markAsTouched()
      this.form.get('pagamento').markAsTouched()
      this.form.get('complemento').markAsTouched()
    }
    let pedido: Pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.pagamento,
      this.form.value.complemento
    )

    this.ordemCompraService.confirmarCompra(pedido)
      .subscribe((idPedido: number) => this.idPedido = idPedido)

  }
}
