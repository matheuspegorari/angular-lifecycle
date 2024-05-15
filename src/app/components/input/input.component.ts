import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar item';

  valorItem!: string;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  editarItem() {
    this.listaService.editarItemDaLista(
      this.itemQueVaiSerEditado,
      this.valorItem
    );
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editando item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
    console.log('Changes' + changes['itemQueVaiSerEditado'].currentValue);
  }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    console.log(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
