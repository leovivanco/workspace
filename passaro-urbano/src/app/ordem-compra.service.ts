import { Pedido } from "./pedido.model";


export class OrdemCompraService {

  constructor() { }
  confirmarCompra(pedido: Pedido): void{
    console.log(pedido)
  }
}
