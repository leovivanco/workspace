import { ItemCarrinho } from "./shared/item-carrinho.model";


export class Pedido {
  constructor(
    public endereco: string,
    public number: string,
    public complemento: string,
    public formaPagamento: string,
    public itensCarrinho: ItemCarrinho[]
  ){}
}
