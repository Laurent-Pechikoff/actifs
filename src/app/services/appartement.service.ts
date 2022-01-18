import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IAppartement } from '../models/appartement.model';


@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  constructor(private firestore: Firestore) { }

  //ajouter un appartement
  addAppartement(appartement: IAppartement){
    const appartementsRef = collection(this.firestore, 'appartements');
    return addDoc(appartementsRef, appartement);
  }
//recuperer tous les appartements
  getAppartements(): Observable<IAppartement[]>{
    const appartementsRef = collection(this.firestore, 'appartements');
    return collectionData(appartementsRef, { idField: 'id' }) as Observable<IAppartement[]>;
  }


  //suprimer appartement
  deleteAppartement(appartement: IAppartement){
    const appartementDocRef = doc(this.firestore, `appartements/${appartement.id}`);
    return deleteDoc(appartementDocRef);
  }

  //modifier appartement totalement
  updateAppartement(appartement: IAppartement){
    const appartDocRef = doc(this.firestore,`appartements/${appartement.id}`);
    return setDoc(appartDocRef, appartement);
  }
//modifier appartement prix
  modifyAppartementPrix(appartement: IAppartement, amount: number){
    const appartDocRef = doc(this.firestore,`appartements/${appartement.id}`);
    return updateDoc(appartDocRef, {prix: amount });
  }
}
