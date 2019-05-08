import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ItemCarrinho[] = [];
  constructor() { }
  exibiItensCarrrinho(){
    return this.itens
  }
  addItem(item: Oferta){
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      item.id,
      item.categoria,
      item.titulo,
      item.descricao_oferta,
      item.valor,
      item.imagens[0],
      1,
    )

    let itemCarrinhoEncontrado =
      this.itens.find(
        (item: ItemCarrinho) => item.id === itemCarrinho.id
      )



    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    }else{
      this.itens.push(itemCarrinho)
    }

    console.log(this.itens)

  }
  totalCart(){
    return this.itens.reduce((acc, currentValue) => {
      return acc + (currentValue.valor * currentValue.quantidade)
    }, 0)
  }
  removeItemCart(item: ItemCarrinho){
    // this.itens.slice()
  }
  cleanCart():void{
    this.itens = []
  }
}
