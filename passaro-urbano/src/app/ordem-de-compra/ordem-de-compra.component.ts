import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../pedido.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }
  idPedido: number;
  form: FormGroup = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'pagamento': new FormControl(null)
  })

  ngOnInit(){

  }
  confirmarPagamento():void{
    console.log(this.form)
  }


}
