import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  private criarItem(nome: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id,
      nome,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  adicionarItemNaLista(nome: string) {
    const item = this.criarItem(nome);
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(old: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: old.id,
      nome: nomeEditadoDoItem,
      data: old.data,
      comprado: old.comprado,
    };

    const id = old.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
