import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIDParaExcluir = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    console.log('Estão tentando me calar.');
    this.emitindoIDParaExcluir.emit(this.item.id);
  }

  ngOnDestroy() {
    console.log('Conseguiram me calar.');
  }
}
