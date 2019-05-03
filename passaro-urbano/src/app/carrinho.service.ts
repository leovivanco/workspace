import { ItemCarrinho } from './shared/item-carrinho.model';

export class CarrinhoService {
  itens: ItemCarrinho[] = [];
  constructor() { }
  exibiItensCarrrinho(){
    return this.itens
  }
}
