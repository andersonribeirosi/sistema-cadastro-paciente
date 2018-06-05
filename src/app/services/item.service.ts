import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Paciente } from '../models/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Paciente>;
  itens: Observable<Paciente[]>;
  itemDoc: AngularFirestoreDocument<Paciente>;

  constructor(public afs: AngularFirestore) {
    // this.itens = this.afs.collection('itens').valueChanges();

    this.itemsCollection = this.afs.collection('pacientes', ref => ref.orderBy('nome', 'asc'));

    this.itens = this.afs.collection('pacientes').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Paciente;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }

   getItens(){
     return this.itens;
   }

   addItem(item: Paciente){
     this.itemsCollection.add(item);
     alert('Paciente cadastrado com sucesso!');
   }

   deleteItem(item: Paciente){
     this.itemDoc = this.afs.doc(`pacientes/${item.id}`);
     this.itemDoc.delete();
     alert('Paciente removido com sucesso!');
   }

   updateItem(item: Paciente){
     this.itemDoc= this.afs.doc(`pacientes/${item.id}`);
     this.itemDoc.update(item);
     alert('Paciente atualizado com sucesso!!');
   }

}

