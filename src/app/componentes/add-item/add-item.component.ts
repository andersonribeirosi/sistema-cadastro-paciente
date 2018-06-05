import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Paciente } from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Paciente = {
    nome : '',
    cpf : '',
    nomeDaMae : '',
    dataDeNascimento : '',
    sexo : '',
    rua : '',
    cidade : '',
      bairro : '',
      estado : '',
      emEspera : '',
      dataAtendimento : '',
      sintomas : '',
      doencas : '',
      hipertenso : '',
      alergico : '',
      diabetes : '',
      prescricao : ''

  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.nome != '' && this.item.cpf != '' && this.item.nomeDaMae != ''
      && this.item.dataDeNascimento != '' && this.item.sexo != '' && this.item.rua != ''
      && this.item.cidade != ''&& this.item.bairro != '' && this.item.estado != ''
      && this.item.emEspera != ''
      && this.item.dataAtendimento != '' && this.item.sintomas != ''
      && this.item.doencas != '' && this.item.hipertenso != '' && this.item.alergico != ''
      && this.item.diabetes != '' && this.item.prescricao != ''
    ){
      this.itemService.addItem(this.item);
      this.item.nome = '';
      this.item.cpf = '';
      this.item.nomeDaMae = '';
      this.item.dataDeNascimento = '';
      this.item.sexo = '';
      this.item.rua = '';
      this.item.cidade = '';
      this.item.bairro = '';
      this.item.estado = '';
      this.item.emEspera = '';
      this.item.dataAtendimento = '';
      this.item.sintomas = '';
      this.item.doencas = '';
      this.item.hipertenso = '';
      this.item.alergico = '';
      this.item.diabetes = '';
      this.item.prescricao = '';

    }
  }

}
