export class ItemCarrinho {
  constructor(
    public id: number,
    public categoria: string,
    public titulo: string,
    public descricao_oferta: string,
    public valor: number,
    public imagens: object,
    public quantidade: number,
  ){

  }
}
