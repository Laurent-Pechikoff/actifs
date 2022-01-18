import { Component, OnInit } from '@angular/core';
import { IAppartement } from 'src/app/models/appartement.model';
import { AppartementService } from 'src/app/services/appartement.service';

@Component({
  selector: 'app-liste-admin-appartement',
  templateUrl: './liste-admin-appartement.component.html',
  styleUrls: ['./liste-admin-appartement.component.scss']
})
export class ListeAdminAppartementComponent implements OnInit {

  appartements: IAppartement[] = []; 
  appartementObjet= {
    
    name : "",
    surface : 0,
    prix: 0,
    disponible: false
  }
  constructor(private appartementService: AppartementService) { }

  ngOnInit(): void {
    this.afficherAllApparts();
  }

  afficherAllApparts(){
    this.appartementService.getAppartements().subscribe((res: IAppartement[]) => {
      this.appartements = res;
    })
  }

  
suprimeAppartement(appartement: IAppartement){
  this.appartementService.deleteAppartement(appartement).then(() =>
  console.log('appartement suprimé'));
}

modAppartement(appartement: IAppartement){
  
  this.appartementObjet = appartement;
  console.log(this.appartementObjet);
}





  editAppartement(appartement: IAppartement){
this.appartementService.updateAppartement(appartement).then(() =>
  console.log('appartement modifié'));
  }

  setPrice(appartement: IAppartement, prix: number){
    this.appartementService.modifyAppartementPrix(appartement, prix);
  }

}
