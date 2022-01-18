import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICommande } from '../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private firestore: Firestore) { }


  //recuperer toutes les commandes
  getCommandes(): Observable<ICommande[]> {
    const commandesRef = collection(this.firestore, 'commandes');
    return collectionData(commandesRef, { idField: 'id' }) as Observable<ICommande[]>;

  }

  //ajouter une commande
  postCommande(commande: ICommande){
    const commandesRef = collection(this.firestore, 'commandes');
    return addDoc(commandesRef, commande);
  }


}
