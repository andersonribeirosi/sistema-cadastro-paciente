import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Paciente } from '../../models/item';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: Paciente[];
  editEstado: boolean = false;
  itemEdit: Paciente;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItens().subscribe(itens =>{
      this.itens = itens;
    })
  }

  deleteItem(event, item: Paciente){
    this.limparEstado(event, item);
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Paciente){
    this.editEstado = true;
    this.itemEdit = item;
  }

  updateItem(item: Paciente){
    this.itemService.updateItem(item);
    this.limparEstado(event, item);
  }

  limparEstado(event, item){
    this.editEstado = false;
    this.itemEdit = null;
  }


}
