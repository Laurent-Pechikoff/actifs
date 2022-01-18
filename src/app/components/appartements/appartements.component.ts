import { Component, OnInit } from '@angular/core';
import { IAppartement } from 'src/app/models/appartement.model';
import { AppartementService } from 'src/app/services/appartement.service';





@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.scss']
})
export class AppartementsComponent implements OnInit {
  afficherForm: boolean = false;
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

  //pour afficher le formulaire de commande
  afficheForm(){
    this.afficherForm = !this.afficherForm;
  }
  
suprimeAppartement(appartement: IAppartement){
  this.appartementService.deleteAppartement(appartement).then(() =>
  console.log('appartement suprimé'));
}

modAppartement(appartement: IAppartement){
  this.appartementObjet = appartement;
}





  editAppartement(appartement: IAppartement){
this.appartementService.updateAppartement(appartement).then(() =>
  console.log('appartement modifié'));
  }

  setPrice(appartement: IAppartement, prix: number){
    this.appartementService.modifyAppartementPrix(appartement, prix);
  }

}
